import React from "react";
import { useHistory } from "react-router-dom";

const ButtonNav = ({ label, url }) => {
  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };
  return (
    <button
      className="ui white inverted basic button"
      onClick={() => navigateTo(url)}
    >
      {label}
    </button>
  );
};

export default ButtonNav;
