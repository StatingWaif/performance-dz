import React from "react";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/styles.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
