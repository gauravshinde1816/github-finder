import React, { Fragment } from "react";
import User from "../User/User";
import Search from "../User/Search";

function Home() {
  return (
    <Fragment>
      <Search />
      <User />
    </Fragment>
  );
}

export default Home;
