import Sidebar from "../../components/organisms/Sidebar";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Users from "../../../redux/user";
import business from "../../../redux/business";
import HyperText from "../../components/molecules/HyperText";
import { TUser } from "../../../redux/user/model";
import { ROUTES } from "../../../redux/constants";

export const BusinessAdminDashBoard = () => {
  const currentUser = useSelector(Users.selectors.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    // if no business yet
    if (currentUser?.businesses)
      if (currentUser?.businesses.length < 1) navigate(ROUTES.createBusiness);
  }, [currentUser]);

  return (
    <div style={{ float: "right" }}>
      {currentUser?.businesses.map((business, index) => (
        <div key={index}>
          <HyperText
            toPath={`Business/${business.id}`}
            link={business.en_name}
          />
        </div>
      ))}
    </div>
  );
};
