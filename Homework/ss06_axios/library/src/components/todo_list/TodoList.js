import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as todoListService from "./service/TodoListService";
export const TodoList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getAll();
    console.log("load");
  }, []);
  const getAll = async () => {
    const list = await todoListService.getAll();
    setList(list);
  };

  return (
    <>
      <h1>Todo list</h1>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await todoListService.create(values);
          getAll();
          resetForm();
        }}
      >
        <Form>
          <Field type="text" name="name"></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <ul>
        {list.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    </>
  );
};
