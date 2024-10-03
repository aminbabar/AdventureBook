import React from "react";

const PhotosPreview = (props) => {
    const photoItems = props.photos.map((url, idx) => {
        if (idx > 8) {return}; // can only have max 9 photos for photo preview
        return (<div key={url + idx.toString()} className="single-photo-container"><img src={url} /></div>)
    });

    return (
        <div className="photos-preview">

            <div className="photos-header">
                <div onClick={() => props.switchTab("photos")}>
                    Photos
                </div>
                <div onClick={() => props.switchTab("photos")}>
                    See all photos
                </div>
            </div>

            <div className="photos-container">
                {photoItems}
            </div>
        </div>
    );
};


export default PhotosPreview;