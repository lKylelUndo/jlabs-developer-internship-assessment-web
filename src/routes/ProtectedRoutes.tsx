import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { auth, loading } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const userRoutes: string[] = ["/homepage"];

  // We can still scale this if ever we have an admin and a user role
  useEffect(() => {
    if (loading) return;

    if (auth.isAuthenticated && userRoutes.includes(path)) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  }, [auth, loading]);

  if (loading) {
    return null;
  }

  return auth.isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoutes;
