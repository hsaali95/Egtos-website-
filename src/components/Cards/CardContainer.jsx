import * as React from "react";
import Container from "@mui/material/Container";
import BasicCard from "./card";

export default function Card() {
  return (
    <>
      <Container  sx={{marginTop:"10px"}}>
        <BasicCard />
      </Container>
    </>
  );
}
