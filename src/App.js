import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./Component/TodoList";
import store from "./redux/store";
import CreateTask from "./Component/CreateTask";
import { Col, Grid, Row } from "rsuite";
import classes from './assets/styles/Todo.module.scss'
function App() {
  return (
    <Provider store={store}>
      <div style={{backgroundColor:'#474747'}}>
        <Row className={classes.todoList}>
          <Col md={10} className={classes.createTask}>
            <CreateTask />
          </Col>
          <Col md={14} className={classes.TaskList}>
            <TodoList />
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
