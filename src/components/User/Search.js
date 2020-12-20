import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { ClearUser, users } = githubContext;
  const { setAlert } = alertContext;

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

      {users.length > 0 ? (
        <button onClick={ClearUser} className="btn btn-light  btn-block">
          Clear
        </button>
      ) : null}
    </div>
  );
};
export default Search;
