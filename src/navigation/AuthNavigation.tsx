import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "../app/auth/Login";
import RegistrationPage from "../app/auth/Signup";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<RegistrationPage />} />
    </Routes>
  );
}
