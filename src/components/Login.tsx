import { Box, Button, Modal, Typography, Input, IconButton, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/reducers/loginOperations";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

interface LoginProps {
  open: boolean;
  onClose: () => void; // Add onClose prop to handle modal closing
}

const Login = ({ open, onClose }: LoginProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { data, error, loading } = useSelector((state: any) => state.loginOperations.login);

  useEffect(() => {
    if (data && data.token) {
      sessionStorage.setItem('token', data.token);
    }
  }, [data]);

  const handleLogin = (values: { username: string; password: string }) => {
    dispatch(login(values));
    navigate('/');
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={onClose} // Use the onClose prop to close the modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="h2">Login</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box display="flex" flexDirection="column" mt={2}>
                  <Field
                    as={Input}
                    name="username"
                    placeholder="Username"
                    fullWidth
                    sx={{ mb: 1 }}
                  />
                  <ErrorMessage name="username">
                    {msg => <div style={{ color: 'red', marginBottom: '8px' }}>{msg}</div>}
                  </ErrorMessage>
                  <Field
                    as={Input}
                    name="password"
                    type="password"
                    placeholder="Password"
                    fullWidth
                    sx={{ mb: 1 }}
                  />
                  <ErrorMessage name="password">
                    {msg => <div style={{ color: 'red', marginBottom: '8px' }}>{msg}</div>}
                  </ErrorMessage>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: 2,
                      padding: '10px 20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Login
                  </Button>
                </Box>
                {loading && <Typography>Loading...</Typography>}
                {error && <Alert severity="error">{error}</Alert>}
                {data && data.token && (
                  <Alert severity="success">
                    Login successful!
                  </Alert>
                )}
              </Form>
            )}
            {/* you can login with this informatio */}
            
          </Formik>
          <p style={{textAlign: 'center'}}>You can login with this information:</p>
          <p style={{textAlign: 'center' }}>Username : mor_2314</p>
          <p style={{textAlign: 'center' }}>Password : 83r5^_</p>
          
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
