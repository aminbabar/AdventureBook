import React from "react";

const Photos = (props) => {
    const photoItems = props.photos.map((url, idx) => {
        return (<img key={url + idx.toString()} className={"temp"} src={url}/>)
    });
    return (
        <div className="temp">
            <h1>Photos</h1>
            {photoItems}
        </div>
    );
};


export default Photos;