import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GridConatiner from "./components/Cards/gridConatiner";
import Heading from "./components/Cards/Heading";
import Header from "./components/Header/Header";
import AppBarr from "./components/SubAppBar/Appbar";
import TeamBody from "./components/Team/TeamBody";
import LoginBody from "./components/LoginPage/LoginBody";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SignInSide from "./components/LoginPage/LoginAuth/LoginPage";
import { ToastContainer } from "react-toastify";
import Signin from "./components/LoginPage/LoginAuth/Signinauth/Signin";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/AdminPanel/Admin";
import Body from "./components/StephenHolme/Body";

const theme = createTheme();

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        {/* ============================================================================ */}
        {/* start egtos animation ui  */}
        {/* page 2  */}
         {/* <Header />
        <AppBarr />  */}
        {/* page 1  */}
        {/* <div data-aos="fade-up-left">
          <LoginBody />
        </div> */}

        {/* end of page 1 */}
        {/* <div data-aos="flip-left">
          <Heading />
          <GridConatiner />
        </div> */}

        {/* end of page 2 */}
        {/* page3 part  */}
        {/* <div data-aos="fade-right">
          <TeamBody Teams="Teams" />
        </div> */}

        {/* page3 end  */}
        {/* page3 part  */}
        {/* <div data-aos="fade-up">
          <TeamBody Teams="Sector revenues" />
        </div> */}

        {/* page3 end  */}


        <Body/>

        {/* sign up  form  */}
        {/* end of egtos */}
        {/* ========================================================================================= */}

        {/* =============================================================================== */}
        {/* below code is crud operation using firebase  */}
        {/* <Routes>
          <Route path="/" element={<SignInSide />} />
          Log in form
          <Route path="Signin" element={<Signin />} />
          Admin panel
          <Route path="Admin" element={<Admin />} />
        </Routes>
        <SignInSide />
        <Signin /> */}

        {/* end of crud opeation  */}
        {/* =================================================================================== */}
      </ThemeProvider>
    </>
  );
}

export default App;
