import React from "react";
import "../style/App.scss";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav></nav>
        <div className="header_content">
          <div>
            <UserForm />
          </div>
        </div>
      </header>
      <main className="table">
        <UserList />
      </main>
    </div>
  );
}

export default App;
