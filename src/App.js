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

const theme = createTheme();

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* page 2  */}
        <Header />
        <AppBarr />
        {/* page 1  */}
        <div data-aos="fade-up-left">
          <LoginBody />
        </div>

        {/* end of page 1 */}
        <div data-aos="flip-left">
          <Heading />
          <GridConatiner />
        </div>

        {/* end of page 2 */}
        {/* page3 part  */}
        <div data-aos="fade-right">
          <TeamBody Teams="Teams" />
        </div>

        {/* page3 end  */}
        {/* page3 part  */}
        <div data-aos="fade-up">
          <TeamBody Teams="Sector revenues" />
        </div>

        {/* page3 end  */}
      </ThemeProvider>
    </>
  );
}

export default App;
