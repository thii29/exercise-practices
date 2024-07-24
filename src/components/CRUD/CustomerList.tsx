import { useState } from "react";
import Customer from "./Customer";
import InsertCustomer from "./Modal/InsertCustomer";
import "./style.css";
import userdata from "./userdata";

type CustomerType = {
  id: string;
  name: string;
  username: string;
  email: string;
};
export type AddCustomerType = Omit<CustomerType, "id">;
type DeleteCustomerType = Pick<CustomerType, "id">;

const CustomerList = () => {
  const [customers, setCustomers] = useState<CustomerType[]>(userdata);
  const [editCustomer, setEditCustomer] = useState<CustomerType | null>(null);

  // INPUT SEARCH =>

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
  const addInfo = (customer: AddCustomerType) => {
    //neu user ko nhap gi het thi:
    //check ton tai gt trong o input
    if (!customer) return;
    //neu co nhap thong tin vao
    const generateId = new Date().getMilliseconds().toString();
    const newCustomer: CustomerType = {
      id: generateId,
      email: customer.email,
      name: customer.name,
      username: customer.username,
    };
    const newArr = customers.concat([newCustomer])
    // Spread operator, destructuring
    const newArr1 = [...customers,newCustomer]
    setCustomers(newArr1);
  };
  //edit
  //tim ID
  const findCustomer = (customer: CustomerType) => {
    setEditCustomer(customer);
    // setInputName(customer?.name);
  };
  //bat dau edit
  const editName = () => {
    //dung de check type
    if (!editCustomer) return;
    //obj moi chua ten da sua
    // const newCustomerObj: CustomerType = {
    //   ...editCustomer,
    //   name: inputName,
    // };

    //const newCustomerArr: CustomerType[] = [];

    // for (let index = 0; index < customers.length; index++) {
    //   const cus = customers[index];
    //   if (cus.id === newCustomerObj?.id) {
    //     newCustomerArr.push(newCustomerObj);
    //   } else newCustomerArr.push(cus);
    // }
    // const newCustomerArr: CustomerType[] = customers.map((cus, pos, arr) => {
    //   if (cus.id === newCustomerObj?.id) {
    //     cus = newCustomerObj;
    //   } else cus = arr[pos];
    //   return cus;
    // });

    // setCustomers(newCustomerArr);

    // //after edit; clean up
    // setEditCustomer(null);
    // setInputName("");
  };
  return (
    <div>
      <div className="input-wrap">
        <div>
          {/* FIX => INPUT */}
          {/* <input type="text" className="input" value={inputName} /> */}
        </div>
        <div>
          <input type="button" value="Search" className="btn" />
        </div>
      </div>
      <InsertCustomer open={open} setOpen={setOpen} addInfo={addInfo} />
      <div className="list-container flex-column">
        <div className="title-wrapper">
          <h2>Customer List</h2>
          <button
            className="btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
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
