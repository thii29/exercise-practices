import { classicNameResolver } from "typescript";
import "./style.css";

import React from "react";

type Props = {
  open: boolean;
  setOpen: (open:boolean) => void;
}

const InsertCustomer = ({open, setOpen}: Props) => {
  return (
    <div className={`modalWrapper ${open? '': 'close'}`}>
      <div className="modalBox">
        <div className="header-box">
          <h3>INSERT CUSTOMER</h3>
          <button className="cancel-icon" onClick={()=>{setOpen(!open)}}>X</button>
        </div>
        <div className="body-box">
            <form action="" method="post">
                <div className="input-box">
                    <label htmlFor="" className="input-label">User name: </label>
                    <input className="input" type="text" name="username" id="" value='' placeholder="Enter username"/>
                </div>
                <div className="input-box">
                    <label htmlFor="" className="input-label">Full name: </label>
                    <input className="input" type="text" name="fullname" id="" value='' placeholder="Enter your full name"/>
                </div>
                <div className="input-box">
                    <label htmlFor="" className="input-label">Email: </label>
                    <input className="input" type="text" name="email" id="" value='' placeholder="Enter email"/>
                </div>
                <div className="form-btn">
                    <button type="submit" className="btn-cancel">Cancel</button>
                    <button type="submit" className="btn-ok">OK</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default InsertCustomer;
