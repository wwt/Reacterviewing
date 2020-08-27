import React from "react";
import placeholder from "./placeholder.svg";
import "./AlbumItem.css";

class AlbumItem extends React.Component {
    render() {
        return(
            <li className="album-item">
                <img src={placeholder}></img>
                <h3>{this.props.album.title}</h3>
            </li>
        );
    }
}

export default AlbumItem;