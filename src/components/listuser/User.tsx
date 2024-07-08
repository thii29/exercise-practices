import React from "react";
import "./style.css";

const User = (props: any) => {
  const { userName, deleteUser } = props;

  return (
    <div className="user-wrap">
      <div className="user">{userName}</div>
      <input
        type="button"
        value="Delete"
        className="btn"
        onClick={() => {
          deleteUser(userName);
        }}
      />
    </div>
  );
};

export default User;
