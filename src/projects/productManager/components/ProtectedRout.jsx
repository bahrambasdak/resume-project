import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const ProtectedRout = ({ route }) => {
  const { user } = useAuth();


  return (
    <>
      {user.loggedIn ? (
        route.element
      ) : (
        <Navigate to={"/product-manager/login"} />
      )}
    </>
  );
};

export default ProtectedRout;
