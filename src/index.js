import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDom.render(<App youtube={youtube} />, document.querySelector("#root"));
