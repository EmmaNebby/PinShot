import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types"; //This is to ensure ythat our inputs are as specified in the type of properties. E.g. to ensure Strings are Strings, and numbers are numbers etc
import { Header } from "@components";
import { useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  const paths = ["/login", "/signup"]; //hide this when you are in login
  const matchPaths = paths.map((path) => path); //the path to hide when in login
  return (
    <>
      <main className="min-vh-100">
        {!matchPaths.includes(location.pathname) && <Header />}
        <Outlet />
      </main>
    </>
  );
}
