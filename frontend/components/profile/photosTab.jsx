import React from "react";

const PhotosTab = (props) => {
    const photoItems = props.photos.map((url, idx) => {
        return (<div key={url + idx.toString()} className="single-photo-container"><img src={url} /></div>)
    });

    return (
        <div className="photos-tab">

            <div className="photos-header">
                <div onClick={() => props.switchTab("photos")}>
                    Photos
                </div>
                {/* <div onClick={() => props.switchTab("photos")}>
                    See all photos
                </div> */}
            </div>

            <div className="photos-container">
                {photoItems}
            </div>
        </div>
    );
};


export default PhotosTab;