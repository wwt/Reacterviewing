import React from "react";
import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

class AlbumList extends React.Component {
    render() {
        return (
            <ul className="album-list">
                {this.props.albums.map(album => (
                    <AlbumItem key={album.id} album={album}/>
                ))}
            </ul>
        )
    }
}

export default AlbumList;