import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import classes from "../assets/styles/Todo.module.scss";
import { Icon, Loader, Row } from "rsuite";
import Bounce from "react-reveal/Bounce";

const TodoList = props => {
  const todos = useSelector(state => state.data);
  return (
    <div className={classes.todolistRightSide}>
      <div className={classes.todoHeader}>Todo List</div>
      <div className={classes.todoContainer}>
        <Row className={classes.tasks}>
          {todos && todos.length ? (
            todos.map((task, index) => (
              <>
                <Bounce left duration={1300} key={index}>
                  <Task data={task} index={index} key={index} />
                </Bounce>
              </>
            ))
          ) : (
            <span style={{ textAlign: "center" }}>
              <Icon
                icon="inbox"
                style={{
                  Color: "rgba(255,255,255,0.6)",
                  fontSize: "100px",
                  backgroundColor: "transparent"
                }}
              ></Icon>
              <h1
                style={{
                  Color: "rgba(255,255,255,0.6)",
                  fontSize: "50px",
                  backgroundColor: "transparent"
                }}
              >
                No Data
              </h1>
            </span>
          )}
        </Row>
      </div>
    </div>
  );
};
// const mapStateToProps = state => {
//   return {
//     alltodos: state.data
//   };
// };
// export default connect(mapStateToProps)(TodoList);
export default TodoList;
