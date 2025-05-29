import React, { FunctionComponent, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox"
import { CDN_URL } from "../utils/contants";
import { Footer } from "../components/aesthetic/Footer";
import { Header } from "../components/aesthetic/Header";
import { TREE_STUDY_IMAGES } from "../utils/contants";
import "../components/aesthetic/aesthetic.css"

export const Work: FunctionComponent = () => {
    const [index, setIndex] = useState(-1);

    const currentImage = TREE_STUDY_IMAGES[index];
    const nextIndex = (index + 1) % TREE_STUDY_IMAGES.length;
    const nextImage = TREE_STUDY_IMAGES[nextIndex] || currentImage;
    const prevIndex = (index + TREE_STUDY_IMAGES.length - 1) % TREE_STUDY_IMAGES.length;
    const prevImage = TREE_STUDY_IMAGES[prevIndex] || currentImage;

    const handleClick = (index: number) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div className="color-default relative-position flex-container-column content-container">
            <Header/>
                <div className="flex-container-row full-width work-wrapper">
                    <div className="flex-container-column work-projects">
                        <p>Tree Study</p>
                        <p>50 Blocks</p>
                    </div>
                    <div className="flex-container-column project-images">
                        <Gallery 
                            images={TREE_STUDY_IMAGES}
                            onClick={handleClick}
                            enableImageSelection={false}
                        />
                        {!!currentImage && (
                            /* @ts-ignore */
                            <Lightbox
                                mainSrc={currentImage.original}
                                imageTitle={currentImage.caption}
                                mainSrcThumbnail={currentImage.src}
                                nextSrc={nextImage.original}
                                nextSrcThumbnail={nextImage.src}
                                prevSrc={prevImage.original}
                                prevSrcThumbnail={prevImage.src}
                                onCloseRequest={handleClose}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}
                        <img className="" style={{width: "45%"}} src={`${CDN_URL}/home/fire_station.jpg`}/>
                    </div>
                </div>
            <Footer />
        </div>
    )
}