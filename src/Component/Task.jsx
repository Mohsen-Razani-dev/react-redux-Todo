import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todo/actions";
import classes from "../assets/styles/Todo.module.scss";
import { Col, Divider, Icon, Popover, Whisper, Notification } from "rsuite";

const Task = props => {
  const dispatch = useDispatch();

  return (
    <Col
      md={18}
      className={classes.task}
      style={{ backgroundColor: props.data.complete ? "#e6ffe6" : "white" }}
    >
      <span className={classes.title}>{props.data.title}</span>
      <Divider></Divider>
      <span className={classes.descr}>{props.data.descr}</span>
      <Divider></Divider>
      <div className={classes.btnState}>
        <button onClick={() => dispatch(deleteTodo(props.data.id))}>
          <Icon icon="trash" style={{ color: "#8c0101" }}></Icon>
        </button>
        <button onClick={() => dispatch(toggleTodo(props.data.id))}>
          {props.data && props.data.complete ? (
            <Icon icon="minus" style={{ color: "#ac9600" }}></Icon>
          ) : (
            <Icon icon="check" style={{ color: "#0a8c01" }}></Icon>
          )}
        </button>
      </div>
    </Col>
  );
};
// const mapDispatchToProps = dispatch => {
//   return {
//     toggleTodo: id => dispatch(toggleTodo(id)),
//     deleteTodo: id => dispatch(deleteTodo(id))
//   };
// };
// export default connect(null, mapDispatchToProps)(Task);
export default Task;
