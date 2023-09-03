import { Formik, Form, Field } from "formik";

export const AddContract = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Contract</h3>
      <Formik
        initialValues={{
          nameCustomer: "",
          nameService: "",
          starDate: "",
          endDate: "",
          deposit: 0,
          total: 0,
        }}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          console.log(value);
        }}
      >
        <Form></Form>
      </Formik>
    </>
  );
};
