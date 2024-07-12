import React from "react";
import "./style.css"
import CustomerList from "./CustomerList";

const Customer = (props: any) => {
  const { customers, deleteInfo, findCustomer} = props;
  return (
    <div className="customer-wrap">
      <div className="customer">
        <div><span><b>Full name:</b>  </span>{customers.name}</div>
        <div><span><b>Username:</b> </span>{customers.username}</div>
        <div><span><b>Email:</b> </span>{customers.email}</div>
      </div>
      <div className="btn-wrap">
        <input type="button" value="Edit" className="btn" onClick={()=>{findCustomer(customers)}}/>
        <input type="button" value="Delete" className="btn" onClick={()=>{deleteInfo(customers.id)}}/>
      </div>
    </div>
  );
};

export default Customer;
