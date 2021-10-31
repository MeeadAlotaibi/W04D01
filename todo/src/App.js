import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Todo from "./component/Todo";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <Footer />
      </div>
    );
  }
}

export default App;
