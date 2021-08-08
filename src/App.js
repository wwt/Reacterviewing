import React,{useState} from "react";
import axios from 'axios';
import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import "./App.css";

const [albumList,setAlbumList] = useState([]);

axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res => setAlbumList(res.data))
    .catch(error => alert(error))
const App = () => (    
    <div className="albums-app">
        <h1>React Interview Challenge</h1>
        <AlbumList albumList={albumList}/>
    </div>
);

export default hot(module)(App);
