import { useContext } from "react";
import RegistrationForm from "../components/Registration/RegistrationForm/RegistrationForm";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user.accessToken ? (
        <Navigate to="/profile" />
      ) : (
        <>
          <h1 className="display-1 text-header text-prime pt-5 text-center">
            Sign Up
          </h1>
          <RegistrationForm />
        </>
      )}
    </>
  );
};

export default Registration;
