import React from "react";
import * as ROUTES from "../constants/routes"
import { Header } from "../components";
import logo from "../logo.svg"

export default function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
