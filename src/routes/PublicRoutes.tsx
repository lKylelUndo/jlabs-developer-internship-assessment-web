import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoutes = () => {
  const { auth, loading } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;

    navigate(auth.isAuthenticated ? "/homepage" : "/");
  }, [auth, loading]);

  if (loading) {
    return null;
  }

  return !auth.isAuthenticated ? <Outlet /> : null;
};

export default PublicRoutes;
