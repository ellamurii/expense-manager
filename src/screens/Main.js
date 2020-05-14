import React from "react";
import ButtonNav from "../components/ButtonNav";

const Main = () => {
  return (
    <div className="ui column middle aligned">
      <h2 className="ui white inverted center aligned icon header">
        <i className="money bill alternate outline icon"></i>
        Expense Manager
      </h2>
      <div className="ui container center aligned">
        <ButtonNav label="Let's Go!" url="/list" />
      </div>
    </div>
  );
};

export default Main;
