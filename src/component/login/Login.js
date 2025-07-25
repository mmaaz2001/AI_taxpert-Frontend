import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import bgLogin from "./assests/bgLogin.svg";
import book from "./assests/book.svg";
import MyButton from "../../screens/MyButton";
import axios from "axios";
import Cookies from "js-cookie";

const defaultTheme = createTheme();

const client = axios.create({
  baseURL: "https://taxpert-backend.brbtechnologies.pk",
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //         const response = await client.post('/accounts/login/', { username, password });

  //         if (response.status === 200) {
  //             localStorage.setItem('token', response.data.token); // Store token in local storage
  //             console.log('token' , response);

  //             // navigate('/chatbot'); // Redirect to chatbot page after successful login
  //         } else {
  //             const errorMessage = response.data.detail || 'You`ve entered wrong username or password';
  //             Swal.fire({
  //                 icon: 'error',
  //                 title: 'Oops...',
  //                 text: errorMessage,
  //             });
  //         }
  //     } catch (error) {
  //         console.error('Error during login:', error.message);
  //         Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: error.message || 'An error occurred during login.',
  //         });
  //     }
  // };
  var b;
  // const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //         const response = await client.post('/accounts/login/', { username, password });

  //         if (response.status === 200) {
  //             localStorage.setItem('token', response.data.token); // Store token in local storage
  //             console.log('Token:', response.data.token);

  //             // Log CSRF token and session ID from response headers
  //             const csrfToken = response.headers['x-csrftoken'];
  //             const sessionId = response.headers['set-cookie']
  //                 ?.split('; ')
  //                 .find(cookie => cookie.startsWith('sessionid='))
  //                 ?.split('=')[1];

  //             console.log('CSRF Token:', csrfToken);
  //             console.log('Session ID:', sessionId);

  //             // navigate('/chatbot'); // Redirect to chatbot page after successful login
  //         } else {
  //             const errorMessage = response.data.detail || 'You\'ve entered wrong username or password';
  //             Swal.fire({
  //                 icon: 'error',
  //                 title: 'Oops...',
  //                 text: errorMessage,
  //             });
  //         }
  //     } catch (error) {
  //         console.error('Error during login:', error.message);
  //         Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: error.message || 'An error occurred during login.',
  //         });
  //     }
  // };
var b;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await client.post("/accounts/login/", {
        username,
        password,
      });

      console.log(response)
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Store token in local storage
        console.log("Response:", response);
        console.log("Response Data:", response.data);
        console.log("Response Data Token:", response.data.token);
        console.log("Response Headers:", response.headers);
console.log("maaz:", response);
        // If CSRF token is in response headers
        const csrfToken = response.headers["x-csrftoken"];

        const sessionId = response.headers["set-cookie"]
          ?.split("; ")
          .find((cookie) => cookie.startsWith("sessionid="))
          ?.split("=")[1];

          console.log('crfToken' , csrfToken);
          console.log('sessionif' , sessionId);
          

        // Save CSRF token and session ID in cookies
        if (csrfToken) {
          Cookies.set("csrftoken", csrfToken, { expires: 7 }); // Expires in 7 days
          console.log("CSRF Token saved in cookie:", csrfToken);
        }

        if (sessionId) {
          Cookies.set("sessionid", sessionId, { expires: 7 }); // Expires in 7 days
          console.log("Session ID saved in cookie:", sessionId);
        }

        navigate('/chatbot'); // Redirect to chatbot page after successful login
      } else {
        const errorMessage =
          response.data.detail || "You've entered wrong username or password";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "An error occurred during login.",
      });
    }
  };


  
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${bgLogin})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <Tooltip title="Home">
                <img
                  alt=""
                  src={book}
                  style={{
                    float: "right",
                    width: "70px",
                    marginTop: "20px",
                    marginRight: "1rem",
                  }}
                />
              </Tooltip>
            </div>
            <Box
              sx={{
                my: 8,
                mx: "auto",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "160px",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Sign in
              </Typography>
              <Box component="form" validate sx={{ width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ width: "100%" }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: "100%" }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ mb: 1 }}
                />
                <MyButton
                  onClick={handleSubmit}
                  button={"Sign In"}
                  style={{ width: "100%", marginBottom: "5px" }}
                />
                <Grid container>
                  <Grid item xs>
                    {/* <Link sx={{ cursor: 'pointer' }} variant="body2" onClick={() => navigate('/book')}>
                                            {"Forgot password?"}
                                        </Link> */}
                  </Grid>
                  <Grid item>
                    <Link
                      sx={{ cursor: "pointer" }}
                      variant="body1"
                      onClick={() => navigate("/signup")}
                    >
                      {"Create an Account"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
