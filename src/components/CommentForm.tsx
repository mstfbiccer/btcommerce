import { Button, TextField, Typography, Box, Card, CardContent, CardActions } from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/**
 * CommentForm component
 * @returns 
 */
const CommentForm = () => {
  return (
    <Card sx={{ maxWidth: 900, mx: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Leave a Comment
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
          We value your feedback. Let us know your thoughts!
        </Typography>
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
            <Box mb={3}>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="name" component="div">
                {(msg) => <Typography color="error" variant="body2">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={3}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div">
                {(msg) => <Typography color="error" variant="body2">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <Box mb={3}>
              <Field
                as={TextField}
                name="comment"
                label="Comment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <ErrorMessage name="comment" component="div">
                {(msg) => <Typography color="error" variant="body2">{msg}</Typography>}
              </ErrorMessage>
            </Box>

            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </CardActions>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default CommentForm;
