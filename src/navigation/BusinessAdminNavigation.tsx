import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { BusinessAdminDashBoard } from "../app/businessAdmin/DashBoard";
import { CreateBusiness } from "../app/businessAdmin/Business/index.create";
import { BusinessDashboard } from "../app/businessAdmin/Business/Dashboard";
import { TUser } from "../redux/user/model";
import { useSelector } from "react-redux";
import Users from "../redux/user";
import useCheckup from "../hooks/useCheckup";

const BusinessAdminNavigation = () => {
  const currentUser: any = useSelector(Users.selectors.currentUser) || {};
  const { isLoading } = useCheckup();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.businesses?.length === 0)
      navigate("/businessAdmin/Business/create");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path={"/Business/:id"}
          element={
            <RequireAuth currentUser={currentUser} isLoading={isLoading}>
              <BusinessDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/businessAdmin/Business/create"
          element={<CreateBusiness />}
        />

        <Route path="/" element={<BusinessAdminDashBoard />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here business admin nav!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

const RequireAuth = ({
  children,
  isLoading,
  currentUser,
}: {
  children: JSX.Element;
  isLoading: boolean;
  currentUser: TUser | undefined;
}) => {
  console.log(currentUser)
  let location = useLocation();
  if (isLoading) return <div>loading</div>;
  else if (currentUser) return children;
  else return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default BusinessAdminNavigation;
