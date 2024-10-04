import React from "react";

const PhotosPreview = ({openModal, photos, switchTab}) => {
    const photoItems = photos.map((url, idx) => {
        if (idx > 8) {return}; // can only have max 9 photos for photo preview
        return (
            <div
                key={url + idx.toString()}
                className="single-photo-container"
            >
                <img
                    src={url}
                    onClick={() => openModal("photo", url)}
                />
            </div>
        );
    });

    return (
        <div className="photos-preview">

            <div className="photos-header">
                <div onClick={() => switchTab("photos")}>
                    Photos
                </div>
                <div onClick={() => switchTab("photos")}>
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