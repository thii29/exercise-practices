import { classicNameResolver } from "typescript";
import "./style.css";

import React from "react";

const InsertCustomer = () => {
  return (
    <div className="modalWrapper">
      <div className="modalBox">
        <div className="header-box">
          <h3>INSERT CUSTOMER</h3>
          <button className="cancel">X</button>
        </div>
        <div className="body-box">
            <form action="" method="post">
                <div className="input-box">
                    <label htmlFor="">User name: </label>
                    <input type="text" name="username" id="" value={'Enter User Name'}/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Full name: </label>
                    <input type="text" name="fullname" id="" value={'Enter FullName'}/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Email: </label>
                    <input type="text" name="email" id="" value={'Enter Email'}/>
                </div>
                <div className="form-btn">
                    <button type="submit" className="modal-box-btn">Cancel</button>
                    <button type="submit" className="modal-box-btn">OK</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default InsertCustomer;
