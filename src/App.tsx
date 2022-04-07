import AuthNavigation from "./navigation/AuthNavigation";
import { useSelector } from "react-redux";
import User from "./redux/user";
import BusinessAdminNavigation from "./navigation/BusinessAdminNavigation";
import GlobalStyle from "styles";
import { useTranslation } from "react-i18next";
import Users from "./redux/user";
import useCheckup from "./hooks/useCheckup";
import {useCallback} from "react";

function App() {
  const currentUser = useSelector(User.selectors.currentUser);
  const { i18n } = useTranslation();
  const { isLoading } = useCheckup();
 
  const RootNav = useCallback(()=>{
    if(isLoading)
      return(
          <div>
            Loading.....
          </div>
      );
    else if(!currentUser)
     return <AuthNavigation />
    else
      return <BusinessAdminNavigation />

  },[isLoading,currentUser])


  return (
    <>
      <GlobalStyle lng={i18n.language} />
        <RootNav/>
    </>
  );

}

export default App;
