import React from "react";
import Logo from "../../components/Logo/logo";

export default function footer() {
  return (
    <div className="footer">
      <Logo className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
