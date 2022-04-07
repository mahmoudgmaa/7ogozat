import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { EntityKeys } from "../schema";
import * as businessThunks from "./thunks";
import * as categoryThunks from "redux/category/thunks";
import * as actions from "./actions";
import selectors from "./selectors";
import adapter from "./adapter";
import {TCategory} from "../category/model";
import category from "../category";
import {TBusiness} from "./model";
import {remove, values,set} from "lodash";

type TInitialState = {

};

const slice = createSlice({
  name: EntityKeys.BUSINESSES,
  initialState: adapter.getInitialState<TInitialState>({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryThunks.doDeleteCategory.fulfilled,
        (state, action) => {
          if (!action.meta.arg) return;
          if (state.entities) {
              console.log("state.entities")
              console.log(state.entities)
              console.log(action.meta.arg.business_id)
            let businessObj = (values(state.entities) as TBusiness[]).find(
                (business:TBusiness) => {
                  return  business.id==action.meta.arg.business_id
                },
            );
              console.log(businessObj)
              if (businessObj) {
                  const categoryId = action.meta.arg.category_id;
                  console.log(categoryId)
                  const updatedList = remove(values(businessObj.categories), function (category) {
                      return category.id !== categoryId;
                  });
                  console.log(updatedList)
                  set(businessObj, 'categories', updatedList);
                  adapter.upsertOne(state, businessObj);
              }
          }

    }).addCase(categoryThunks.doUpdateCategory.fulfilled,
        (state, action) => {
            if (!action.meta.arg) return;
            if (state.entities) {
                let businessObj = (values(state.entities) as TBusiness[]).find(
                    (business:TBusiness) => {
                        return  business.id==action.payload.data.business_id
                    },
                );

                businessObj?.categories?.filter(action.payload.data);
                if (businessObj) {
                    const categoryId = action.meta.arg.category_id;
                    // adapter.removeOne(businessObj.categories, categoryId);
                }
            }

        })
        .addMatcher(
        isAnyOf(
            categoryThunks.doCreateCategory.fulfilled,
            categoryThunks.doGetCategory.fulfilled
        ),
        (state: any, action) => {
          if (state.entities) {
            let businessObj = (values(state.entities) as TBusiness[]).find(
                (business:TBusiness) => {
                  return  business.id==action.payload.data.business_id
                },
            );
            businessObj?.categories?.push(action.payload.data);
            if (businessObj) adapter.upsertOne(state, businessObj);
          }
        }
    );
    builder.addMatcher(
      isAnyOf(
        businessThunks.doCreateBusiness.fulfilled,
        businessThunks.doUpdateBusiness.fulfilled,
        businessThunks.doFetchBusiness.fulfilled
      ),
      (state: any, action) => {
        if (!action.payload) return;
        console.log("redux business state ");
        console.log(state);
        adapter.upsertMany(state, action.payload.data);
      }
    );
  },
});

const Business = {
  actions,
  thunks: businessThunks,
  slice,
  selectors,
};
export default Business;
