import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VideoHoverPlay from "../components/VideoHoverPlay";
import React from "react";
import "daisyui/dist/full.css";

export const Test = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>K-WD Dashboard</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="build/css/tailwind.css" />
    </>
  );
};

export default Test;
