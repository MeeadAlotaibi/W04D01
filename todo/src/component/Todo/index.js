import React, { Component } from "react";
import TodoItem from "../TodoItem";
import "./style.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "play" },
        { id: 2, name: "sleep" },
      ],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); /////// هذي ميثود ثابته ماتسمح لصفحة تسوي رفرش

    if (e.target.task.value) {
      const todo = {
        /////////////////////////  الآوبجكت الجديد اللي راح نضفية
        id: this.state.todos.length + 1, /////////// يحتوي على آي دي
        name: e.target.task.value, ///////////////// يحتوي على نيم
      };
      this.setState({ todos: [...this.state.todos, todo] }); ///// ست ستيت هي : اداة استخدمها عشان اقدر اغير على الستيت الاصليه لانني ما اقدر اوصل لها إلا بأداة
      e.target.task.value = ""; /////////////////////// فضينا الإنبوت بعد ماضفنا
    }
  };
  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) }); /// ست ستيت هي : اداة استخدمها عشان اقدر (أغير) على الستيت الاصليه لانني ما اقدر اوصل لها إلا بأداة
  };

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul className="todos">
          {this.state.todos.map((todo, i) => (
            <TodoItem
              todo={todo}
              key={i}
              handleDelete={this.handleDelete}
              // money={25}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
