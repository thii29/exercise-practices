import { useState } from "react";
import { AddCustomerType } from "../CustomerList";
import "./style.css";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  addInfo: (customer: AddCustomerType) => void;
};

const InsertCustomer = ({ open, setOpen, addInfo }: Props) => {
  const [inputName, setInputName] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // Cần list ra lại điều kiện để nhớ
  // ! => nếu như ko có
  // !inputName => nếu như ko có inputName
  // nếu như ko có inputName,inputEmail,inputUserName thì DISABLED BUTTON
  const isDisabledButton = !inputName && !inputEmail && !inputUserName
  return (
    <div className={`modalWrapper ${open ? "" : "close"}`}>
      <div className="modalBox">
        <div className="header-box">
          <h3>INSERT CUSTOMER</h3>
          <button
            className="cancel-icon"
            onClick={() => {
              setOpen(!open);
            }}
          >
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
              onChange={(e) => {
                const value = e.target.value;
                setInputUserName(value);
              }}
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
              onChange={(e) => {
                const value = e.target.value;
                setInputName(value);
              }}
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
              onChange={(e) => {
                const value = e.target.value;
                setInputEmail(value);
              }}
            />
          </div>
          <div className="form-btn">
            <button
              type="submit"
              className="btn-cancel"
              onClick={() => setOpen(!open)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-ok"
              disabled={isDisabledButton}
              onClick={() => {
                const newCustomer: AddCustomerType = {
                  email: inputEmail,
                  name: inputName,
                  username: inputUserName,
                };
                addInfo(newCustomer);
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertCustomer;
