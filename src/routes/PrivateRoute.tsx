import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
function PrivateRoute() {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) return "Loading...";
  else if (!user) return <Navigate to="/login" state={{ from: location }} />;
  return <Outlet />;
}

export default PrivateRoute;
