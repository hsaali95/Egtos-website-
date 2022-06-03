import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db, logout } from "../../Config/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Admin() {
  const [inputValue, setinputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [UserNameValue,SetUserNameValue] = useState("")

  const navigate = useNavigate();
  // log out

  const handleLogout = async () => {
    try {
      await logout;
      localStorage.removeItem('userId');
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  // end of logout

  //   onAuthStateChanged(auth, (user) => {
  //       console.log("checking user status",user)
  //     // if (user) {
  //     //   // User is signed in, see docs for a list of available properties
  //     //   // https://firebase.google.com/docs/reference/js/firebase.User
  //     //   const uid = user.uid;
  //     //   // ...
  //     // } else {
  //     //   // User is signed out
  //     //   // ...
  //     // }
  //   });

//   const user = auth.currentUser;

//   if (user) {
//     // console.log("checking status of current user ", user);
//     // const Username = user.displayName
//     // SetUserNameValue(Username)
//     // console.log(Username)
//     const uid = user.uid;
//     localStorage.setItem("userId", uid);
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // ...
//   } else {
//     // navigate("/");
//     // No user is signed in.
//   }

  console.log("object here", todo);

  //   getting data from firebase
  const StoreDataOfFireBase = async () => {
    const dbref = collection(db, "ToDoTable");
    const getData = await getDocs(dbref);
    // console.log("here is an data", getData);
    let makingArryOfObject = [];
    getData.forEach((doc) => {
      // extracting key(from doc.id) and value(from getData().Todo)
    //   console.log("doc here", doc.data());
      makingArryOfObject.push({ key: doc.id, todo: doc.data().todo });
    });
    setTodo(makingArryOfObject);
  };

  useEffect(() => {
    StoreDataOfFireBase();
  

    // addTodo()

  }, [refresh]);
  // add data
  const addTodo = async () => {
    // collection takes 2 argument db(database name) and "ToDoTable"(data to be stored)
    const dbref = collection(db, "ToDoTable");
    try {
      //addDoc take 2 argument dbref and object
      const addData = await addDoc(dbref, {
        todo: inputValue,
      });
    //   console.log(addData);
    //   console.log("working");
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
    setinputValue("");
  };

  // delete data
  const deleteData = async (key) => {
    // console.log("del working");
    // console.log(key);
    // it takes 3 argument
    const dbref = doc(db, "ToDoTable", key);
    const deleteTodo = await deleteDoc(dbref);
    setRefresh(!refresh);
  };
  // update data
  const updateData = async (key) => {
    // doc, updateDoc import them for updating
    // console.log("update working");
    console.log(key);
    const dref = doc(db, "ToDoTable", key);
    const editValue = prompt("Edit");
    const obj = {
      todo: editValue,
    };
    try {
      const updatresponse = await updateDoc(dref, obj);
    //   console.log("check update", updatresponse);
      setRefresh(!refresh);
    } catch (error) {
    //   console.log(error);
    }
  };
//   console.log(inputValue);
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <TextField
            sx={{ backgroundColor: "white", border: "20px" }}
            id="outlined-basic"
            value={inputValue}
            placeholder="Enter Todo"
            onChange={(e) => setinputValue(e.target.value)}
          />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to CRUD operation
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={addTodo}>
                Add Data
              </Button>
              <Button variant="outlined">Delete Data</Button>
              <Button variant="outlined" onClick={handleLogout}>
                log out
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {todo.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={Math.random()}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  key={Math.random()}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value.todo}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        deleteData(value.key);
                      }}
                    >
                      Delete
                    </Button>
                    <Button size="small" onClick={() => updateData(value.key)}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
