import { classicNameResolver } from "typescript";
import "./style.css";

import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  inputName: string;
  inputUserName: string;
  inputEmail: string;
  addInfo: ()=>void;
};

const InsertCustomer = ({ open, setOpen, inputName, inputUserName, inputEmail, addInfo }: Props) => {
  return (
    <div className={`modalWrapper ${open ? "" : "close"}`}>
      <div className="modalBox">
        <div className="header-box">
          <h3>INSERT CUSTOMER</h3>
          <button className="cancel-icon" onClick={() => { setOpen(!open);  }} >
            X
          </button>
        </div>
        <div className="body-box">
          <div className="input-box">
            <label htmlFor="" className="input-label">
              User name:
            </label>
            <input
              className="input"
              type="text"
              name="username"
              id=""
              value={inputUserName}
              placeholder="Enter username"
            />
          </div>
          <div className="input-box">
            <label htmlFor="" className="input-label">
              Full name:
            </label>
            <input
              className="input"
              type="text"
              name="fullname"
              id=""
              value={inputName}
              placeholder="Enter your full name"
            />
          </div>
          <div className="input-box">
            <label htmlFor="" className="input-label">
              Email:
            </label>
            <input
              className="input"
              type="text"
              name="email"
              id=""
              value={inputEmail}
              placeholder="Enter email"
            />
          </div>
          <div className="form-btn">
            <button type="submit" className="btn-cancel" onClick={()=>setOpen(!open)}>
              Cancel
            </button>
            <button type="submit" className="btn-ok" onClick={addInfo}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertCustomer;
