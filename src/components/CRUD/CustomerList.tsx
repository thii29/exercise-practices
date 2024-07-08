import React, { useState } from "react";
import "./style.css";
import userdata from "./userdata";
import Customer from "./Customer";

const CustomerList = () => {
  const [customers, setCustomer] = useState(userdata);
  const [inputName, setInputName] = useState("");
  const [getCustomer, setGetCustomer] = useState<object|string>(userdata);
  //delete
  const deleteInfo = (uid: string) => {
    let arr = customers.filter((user) => {
      return user.id !== uid;
    });
    setCustomer(arr);
  };

  //add
  const addInfo = () => {
    //neu user ko nhap gi het thi:
    //check ton tai gt trong o input
    if(!inputName) return; 

    //neu co nhap thong tin vao
    const string = "abcdefghijklmnopqrstuvwxyz0123456789";
    const stringLength = string.length;
    const newCustomerObj = {
      id: (Math.random() * stringLength).toString(),
      name: inputName,
      username: "",
      email: "abcdefg@gmail.com",
    };
    const newCustomer = [...customers, newCustomerObj];
    setCustomer(newCustomer);
    setInputName("");
  };

  //edit
  //tim ID
  const findCustomer = (id:string)=> {
    const findId = customers.find((users)=>{
      return users.id === id
    })
    if(findId){
      setGetCustomer(findId.name);
      console.log(findId);
    }
    
  }
  //bat dau edit
  const editName = (uname:string)=>{
    const newObject = {...customers, uname}
    setGetCustomer(newObject);
  }
  return (
    <div>
      <div className="input-wrap">
        <div>{getCustomer? "Edit customer name:": "Customer name:"}</div>
        <div>
          <input
            type="text"
            className="input"
            value ={ inputName }
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <div>
          {getCustomer ? <input
            type="button"
            value="Done"
            className="btn"
            onClick={()=>{}}
          /> : <input
            type="button"
            value="Add"
            className="btn"
            onClick={() => {
              addInfo();
            }}
          />}
        </div>
      </div>
      <div className="list-container">
        <h2>Customer List</h2>
        <div className="list">
          {customers.map((values) => {
            return <Customer customers={values} deleteInfo={deleteInfo} findCustomer={findCustomer}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
