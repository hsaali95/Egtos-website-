import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import "react-toastify/dist/ReactToastify.css";

// firebase working

import { auth, provider } from "../../../Config/FireBase.js";
import { db } from "../../../Config/FireBase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
// =================================================================================
// signin with google
import { GoogleAuthProvider } from "firebase/auth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("false");

  const [UserNameValue,SetUserNameValue] = useState("")

  console.log("Current login user",UserNameValue)

  const CurrentLogInUser = auth.currentUser;

  // const provider = new GoogleAuthProvider();
  // signInWithPopup

  const SignwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        SetUserNameValue(user.displayName)
        toast.success("Signin successfully")

        

        // if (CurrentLogInUser) {
        //   console.log("checking status of current user ", CurrentLogInUser);
        //   // const Username = user.displayName
        //   // SetUserNameValue(Username)
        //   // console.log(Username)
        //   const uid = user.uid;
        //   // localStorage.setItem("userId", uid);
        //   // User is signed in, see docs for a list of available properties
        //   // https://firebase.google.com/docs/reference/js/firebase.User
        //   // ...
        // } else {
        //   // navigate("/");
        //   // No user is signed in.
        // }


        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        navigate("/Admin");
      })
      .catch((error) => {
        toast.error("invalid user")
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      //  promiss resolving here means data ka response a raha ha
      .then((result) => {
        toast.success("Sign up successfully!");

        console.log("user created on fire base ", result);
        console.log(email);
        console.log(password);
        console.log(result.user.uid);
        setName("");
        setEmail("");
        setPassword("");
        setUser(result.user);
        navigate("/Signin");
      })
      .catch((err) => {
        toast.error("Invalid user");
        navigate("/");
      });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={SignwithGoogle}
            sx={{ mt: 3, mb: 2, backgroundColor: "white", color: "black" }}
          >
            Sign in With Google
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
