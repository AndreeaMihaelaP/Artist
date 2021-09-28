import React, { useEffect } from "react";
import styled from "styled-components";
import Background from "../assets/img8.jpg";
import "./home.css";

import { animation } from "./script.js";

const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${Background}) no-repeat center center fixed;
  background-size: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
`;

// const Title = styled.h1`
//   color: white;
//   padding-top: 200px;
//   text-align: center;
// `;

const Home = () => {
  useEffect(() => {
    console.log("use", useEffect);
    animation();
  }, []);

  return (
    <>
      <Div>
        <div id="wrapper">
          <h1>
            <span id="title">
              <span className="title-letter">I</span>
              <span className="title-letter">o</span>
              <span className="title-letter">a</span>
              <span className="title-letter">n</span>
              <span className="title-letter">a</span>
              <span className="title-letter">&nbsp;</span>
              <span className="title-letter">I</span>
              <span className="title-letter">r</span>
              <span className="title-letter">i</span>
              <span className="title-letter">m</span>
              <span className="title-letter">i</span>
              <span className="title-letter">a</span>
            </span>
            <br />

            <span id="sub-title">Artist - Painter </span>
          </h1>
        </div>
      </Div>
    </>
  );
};

export default Home;
