import React from "react";
import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import "./App.css";

const App = () => (
    <div className="albums-app">
        <h1>React Interview Challenge</h1>
        <AlbumList />
    </div>
);

export default hot(module)(App);
