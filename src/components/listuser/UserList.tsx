import React, { useState } from "react";
import User from "./User";
import userList from "./data";

import "./style.css";

const UserList = () => {
  const [users, setUser] = useState(userList);
  const deleteUser = (name: string) => {
    let arr = users.filter((uname) => {
      return uname !== name;
    });
    //console.log(arr)
    //let arr:Array <string> = [];
    setUser(arr);
  };

  return (
    <div>
      <h2>User list</h2>
      <div className="list">
        {users.map((name) => {
          return (
            <div>
              <User userName={name} deleteUser={deleteUser} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
