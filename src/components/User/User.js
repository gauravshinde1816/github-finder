import React, { useContext } from "react";
import UserList from "./UserList";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return (
      <div>
        {" "}
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserList key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default User;
