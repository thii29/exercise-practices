import React from "react";
import "./style.css"
import CustomerList from "./CustomerList";

const Customer = (props: any) => {
  const { customer, deleteInfo, findCustomer} = props;
  return (
    <div className="customer-wrap">
      <div className="customer">
        <div><span>Full name: </span>{customer.name}</div>
        <div><span>Username: </span>{customer.username}</div>
        <div><span>Email: </span>{customer.email}</div>
      </div>
      <div className="btn-wrap">
        <input type="button" value="Edit" className="btn" onClick={()=>{findCustomer(customer)}}/>
        <input type="button" value="Delete" className="btn" onClick={()=>{deleteInfo(customer.id)}}/>
      </div>
    </div>
  );
};

export default Customer;
