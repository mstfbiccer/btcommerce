import { Button, TextField } from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CommentForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        comment: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        comment: Yup.string().required("Comment is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field
            as={TextField}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="name" />
        </div>
        <div>
          <Field
            as={TextField}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="email" />
        </div>
        <div>
          <Field
            as={TextField}
            name="comment"
            label="Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
          <ErrorMessage name="comment" />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export default CommentForm;