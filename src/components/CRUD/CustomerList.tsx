import React, { useState } from "react";
import "./style.css";
import userdata from "./userdata";
import Customer from "./Customer";
import InsertCustomer from "./Modal/InsertCustomer";

type CustomerType = {
  id: string;
  name: string;
  username: string;
  email: string;
};

const CustomerList = () => {
  const [customers, setCustomers] = useState<CustomerType[]>(userdata);
  const [editCustomer, setEditCustomer] = useState<CustomerType | null>(null);
  const [inputName, setInputName] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");


  //mo modal insert
  const [open, setOpen] = useState(false);

  //delete
  const deleteInfo = (uid: string) => {
    let arr = customers.filter((user) => {
      return user.id !== uid;
    });
    setCustomers(arr);
  };

  //add
  const addInfo = () => {
    //neu user ko nhap gi het thi:
    //check ton tai gt trong o input
    if (!inputName) return;

    //neu co nhap thong tin vao
    const string = "abcdefghijklmnopqrstuvwxyz0123456789";
    const stringLength = string.length;
    const newCustomerObj = {
      id: (Math.random() * stringLength).toString(),
      name: inputName,
      username: inputUserName,
      email: inputEmail,
    };
    const newCustomer = [...customers, newCustomerObj];
    setCustomers(newCustomer);
    setInputName("");
    setInputUserName("");
    setInputEmail("");
    setOpen(!open);
  };

  //edit
  //tim ID
  const findCustomer = (customer: CustomerType) => {
    setEditCustomer(customer);
    setInputName(customer?.name);
  };
  //bat dau edit
  const editName = () => {
    //dung de check type
    if (!editCustomer) return;
    //obj moi chua ten da sua
    const newCustomerObj: CustomerType = {
      ...editCustomer,
      name: inputName,
    };

    //const newCustomerArr: CustomerType[] = [];

    // for (let index = 0; index < customers.length; index++) {
    //   const cus = customers[index];
    //   if (cus.id === newCustomerObj?.id) {
    //     newCustomerArr.push(newCustomerObj);
    //   } else newCustomerArr.push(cus);
    // }
    const newCustomerArr: CustomerType[] = customers.map((cus, pos, arr) => {
      if (cus.id === newCustomerObj?.id) {
        cus = newCustomerObj;
      } else cus = arr[pos];
      return cus;
    });

    setCustomers(newCustomerArr);

    //after edit; clean up
    setEditCustomer(null);
    setInputName("");
  };
  return (
    <div>
      <div className="input-wrap">
        <div>
          <input type="text" className="input" value={inputName} onChange={(e)=>{setInputName(e.target.value)}}/>
        </div>
        <div>
          <input type="button" value="Search" className="btn" />
        </div>
      </div>
      <InsertCustomer open={open} setOpen={setOpen} 
                      inputName = {inputName} inputUserName = {inputUserName} 
                      inputEmail = {inputEmail} addInfo={addInfo}/>
      <div className="list-container flex-column">
        <div className="title-wrapper">
          <h2>Customer List</h2>
          <button
            className="btn"
            onClick={() => {
              setOpen(!open);
            }} >
            Add new
          </button>
        </div>

        <div className="list flex-column">
          {customers.map((values) => {
            return (
              <Customer
                customer={values}
                deleteInfo={deleteInfo}
                findCustomer={findCustomer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
