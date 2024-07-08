import "./App.css";
import CustomerList from "./components/CRUD/CustomerList";
import UserList from "./components/listuser/UserList";


function App() {
  return (
    <div className="App">
      {/* <UserList/> */}
      <CustomerList />
    </div>
  );
}

export default App;
