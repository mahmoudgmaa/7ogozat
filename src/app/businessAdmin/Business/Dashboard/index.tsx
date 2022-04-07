import { useAppDispatch } from "redux/store";
import {
  BodyWrapper,
  BrandHeaderSide,
  BrandImage,
  Header,
  LanguageButton,
  Wrapper,
} from "../styles";
import { useTranslation } from "react-i18next";
import Sidebar from "app/components/organisms/Sidebar";
import { Outlet } from "react-router-dom";
import React, {useCallback, useEffect, useMemo} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Business from "../../../../redux/business";
import Categories from "../../../../redux/category";
import CategoriesPage from "app/businessAdmin/Business/Categories"
import {BusinessInfo} from "../Info";
import Staff from "../Staff";
import Services from "../Services"
import BusinessPolicy from "../components/Business_policy";

export const BusinessDashboard = () => {
  let params = useParams();
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const business = useSelector((state) =>
    Business.selectors.selectById(state, params.id || "")
  );

  const currentPath = useSelector(
    (state: any) => state._currentPath.currentPath
  );

  useEffect(() => {
    dispatch(Business.thunks.doFetchBusiness(params.id));
  }, []);

  const formFactory = useMemo(()=>{
    switch (currentPath) {
      case "Business Info" : return <BusinessInfo business={business}/>
      case "Categories" : return <CategoriesPage business={business} />
      case "Staff" : return <Staff business={business} />
      case "Services" : return <Services business={business} />
      case "Business Policy" : return <BusinessPolicy business={business} />
    }
  },[currentPath,business] )

  return (
    <Wrapper>
      <Sidebar />
      <div style={{ width: "75vw" }}>
        <Header>
          <h2>{t(currentPath || "business_info")}</h2>
          <BrandHeaderSide>
            <LanguageButton
              onClick={() =>
                i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </LanguageButton>
            <p>{business?.en_name}</p>
            <BrandImage />
          </BrandHeaderSide>
        </Header>
        <BodyWrapper>
          {formFactory}
        </BodyWrapper>
      </div>
      <Outlet />
    </Wrapper>
  );
};
