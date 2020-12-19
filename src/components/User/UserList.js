import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserList = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "70px" }}
      />
      <h2>{login}</h2>
      <Link to={`/user/${login}/`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserList;
