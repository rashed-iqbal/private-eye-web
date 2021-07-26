import React, { useState } from "react";

//! Import Component
import Navbar from "../components/home/Header";
import Main from "../components/home/Main";
import Features from "../components/home/Features";

//! import css
import "../assets/css/home.css";
import Dialog from "../components/home/Dialog";

function Home() {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      {dialog && <Dialog exitDialog={setDialog} />}

      <div className="container">
        <div id="home">
          <Navbar />
          <Main showDialog={setDialog} />
        </div>

        <Features />
      </div>
    </>
  );
}

export default Home;
