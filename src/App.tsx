import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', age: 20 },
    { id: 2, name: 'Item 2', age: 25 },
    { id: 3, name: 'Item 3', age: 30 },
  ]);

  const headers = ['Id', 'Name', 'Age'];

  function handleEdit(item: any) {
    //handle edit logic here
  }

  function handleDelete(item: any) {
    //handle delete logic here
  }

  return (
    <div>
      <Table
        headers={headers}
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
