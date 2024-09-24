import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div>ContactUs</div>

      <button>
        <Link to="address">our address </Link>
        <address></address>
      </button>
      <button>
        <Link to="contact">our number </Link>
      </button>
      <Outlet />
    </>
  );
};

export default ContactUs;
