import { useState } from "react";
import Customer from "./Customer";
import "./style.css";
import userdata from "./userdata";
type CustomerType = {
  id: string;
  name: string;
  username: string;
  email: string;
};
// SỬA CSS
const CustomerList = () => {
  const [customers, setCustomers] = useState<CustomerType[]>(userdata);
  const [inputName, setInputName] = useState("");
  const [editCustomer, setEditCustomer] = useState<CustomerType | null>(null);
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
      username: "",
      email: "abcdefg@gmail.com",
    };
    const newCustomer = [...customers, newCustomerObj];
    setCustomers(newCustomer);
    setInputName("");
  };

  //edit
  //tim ID
  const findCustomer = (customer: CustomerType) => {
    setEditCustomer(customer);
    setInputName(customer?.name);
  };
  //bat dau edit
  const editName = () => {
    if (!editCustomer) return;

    const newCustomerObject: CustomerType = {
      ...editCustomer,
      name: inputName,
    };

    const newCustomerArr: CustomerType[] = [];

    for (let index = 0; index < customers.length; index++) {
      const cus = customers[index];
      if (cus.id === newCustomerObject?.id) {
        //Khi tìm thấy id thì đẩy customer đã đc edit vô mảng
        newCustomerArr.push(newCustomerObject);
      } // Đẩy customer cũ vô mảng
      else newCustomerArr.push(cus);
    }

    setCustomers(newCustomerArr);

    //Clean up
    setEditCustomer(null);
    setInputName("");
  };


  return (
    <div>
      <div className="input-wrap">
        <div>{editCustomer ? "Edit customer name:" : "Customer name:"}</div>
        <div>
          <input
            type="text"
            className="input"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <div>
          {editCustomer ? (
            <input
              type="button"
              value="Done"
              className="btn"
              onClick={editName}
            />
          ) : (
            <input
              type="button"
              value="Add"
              className="btn"
              onClick={() => {
                addInfo();
              }}
            />
          )}
        </div>
      </div>
      <div className="list-container">
        <h2>Customer List</h2>
        <div className="list">
          {customers.map((customer) => {
            return (
              <Customer
                customer={customer}
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
