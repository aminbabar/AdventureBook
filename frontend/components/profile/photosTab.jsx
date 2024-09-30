import React from "react";

const PhotosTab = (props) => {
    let photoItems = props.photos.map((url, idx) => {
        return (<div key={url + idx.toString()} className="single-photo-container"><img src={url} /></div>)
    });


    const noPhotosText = () => {
        if (photoItems.length === 0) {
            return <div className="no-photos">No photos to show</div>
        }
    }

    return (
        <div className="photos-tab">

            <div className="photos-header">
                <div onClick={() => props.switchTab("photos")}>
                    Photos
                </div>
            </div>

            <div className="photos-container">
                {photoItems}
            </div>

            {noPhotosText()}
        </div>
    );
};


export default PhotosTab;