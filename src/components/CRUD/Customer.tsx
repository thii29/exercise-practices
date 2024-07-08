import React from "react";
import "./style.css"
import CustomerList from "./CustomerList";

const Customer = (props: any) => {
  const { customers, deleteInfo, findCustomer} = props;
  return (
    <div className="customer-wrap">
      <div className="customer">
        <div><span>Full name: </span>{customers.name}</div>
        <div><span>Username: </span>{customers.username}</div>
        <div><span>Email: </span>{customers.email}</div>
      </div>
      <div className="btn-wrap">
        <input type="button" value="Edit" className="btn" onClick={()=>{findCustomer(customers.id)}}/>
        <input type="button" value="Delete" className="btn" onClick={()=>{deleteInfo(customers.id)}}/>
      </div>
    </div>
  );
};

export default Customer;
