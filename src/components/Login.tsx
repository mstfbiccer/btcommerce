import { Box, Button, Modal, Typography, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../store/reducers/loginOperations";

interface LoginProps {
  open: boolean;
}
// login modal with MUI with redux 
const Login = ({open}: LoginProps) => {
  const [modalOpen, setModalOpen] = useState(open);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(login({username,password}));
    navigate('/');
  }
  const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const {data, error, loading} = useSelector((state: any) => state.loginOperations.login);
  console.log(error);
  console.log(data);
  // token storage  

  useEffect(() => {
    if(data && data.token) {
      sessionStorage.setItem('token', data.token);
    }
  }
  ,[data]);
  return (
    <Box>
      <Modal
        open={open}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Login
          </Typography>
            <Box>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>Login</Button>
            </Box>
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography>{error}</Typography>}
          {data && data.token && (
            <Typography>
              Login successful!
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Login;