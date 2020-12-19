import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ ClearUser, showClear, setAlert }) => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          placeholder="search users ...."
          onChange={onChange}
          value={text}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>

      {showClear === true ? (
        <button onClick={ClearUser} className="btn btn-light  btn-block">
          Clear
        </button>
      ) : null}
    </div>
  );
};

Search.propTypes = {
  ClearUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
