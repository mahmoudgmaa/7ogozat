import {createEntityAdapter} from '@reduxjs/toolkit';
import {TCategory} from './model';
import {TBusiness} from "../business/model";
import category from "./index";

const adapter = createEntityAdapter<TCategory>({
    selectId: (category) =>category.id,

});

export default adapter;
