import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: true }; // false to private

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;