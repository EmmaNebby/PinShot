import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types"; //This is to ensure ythat our inputs are as specified in the type of properties. E.g. to ensure Strings are Strings, and numbers are numbers etc
import { Header } from "@components";

export default function Root() {
  return (
    <>
      <main className="min-vh-100">
        <Header />
        <Outlet />
      </main>
    </>
  );
}
