import React, { useState } from "react";
import { addTodo } from "../redux/todo/actions";
import { connect } from "react-redux";
import {
  Grid,
  Row,
  Col,
  Divider,
  InputGroup,
  Icon,
  Input,
  IconButton,
  Alert
} from "rsuite";
import classes from "../assets/styles/Todo.module.scss";

const CreateTask = props => {
  const [value, setValue] = useState("");
  const [descr, setDescr] = useState("");
  const insertTodo = e => {
    e.preventDefault();
    if (value && descr){
      props.addTodo(value, descr);
      setValue("");
      setDescr("");
    }else {
      Alert.error('Please Check Your Input')
    }
  };
  return (
    <>
      <div className={classes.InsertTaskHeader}>Insert a Task</div>
      <Divider></Divider>
      <form style={{width:'100%'}}>
        <Input
          placeholder="Title"
          className={classes.insertTodoInput}
          type="text"
          value={value}
          onChange={(value, event) => setValue(value)}
        />
        <Input
          className={classes.insertTodoInput}
          componentClass="textarea"
          rows={3}
          placeholder="Description"
          style={{ width: "100%" }}
          value={descr}
          onChange={(value, event) => setDescr(value)}
        />
        <IconButton
          className={classes.insertTodoInput}
          color="cyan"
          block
          icon={<Icon icon="arrow-right" />}
          placement="right"
          onClick={insertTodo}
        >
          Submit
        </IconButton>
      </form>
    </>
  );
};

export default connect(null, { addTodo })(CreateTask);
