import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StudentTable />
      </div>
    </Provider>
  );
}

export default App;
