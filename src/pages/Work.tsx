import React, { FunctionComponent, useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox"
import { CDN_URL, CustomImage } from "../utils/contants";
import { Footer } from "../components/aesthetic/Footer";
import { Header } from "../components/aesthetic/Header";
import { TREE_STUDY_IMAGES } from "../utils/contants";
import "../components/aesthetic/aesthetic.css"
import { fetchImagesStream } from "../helper/getImagesFromApi";

export const Work: FunctionComponent = () => {
    const [images, setImages] = useState<CustomImage[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    useEffect(() => {
        let isCancelled = false;

        async function loadImages() {
            setLoading(true);
            setError(null);
            try {
                for await (const page of fetchImagesStream('work/tree_study', 3)) {
                    if (isCancelled) break;
                    setImages((prev) => [
                        ...prev, 
                        ...page.map((page) => ({
                             src: page.url,
                             original: page.url,
                             height: 120,
                             width: 150
                        }))
                    ]);
                }
            } catch (err: any) {
                if (!isCancelled) setError(err.message);
            } finally {
                if (!isCancelled) setLoading(false);
            }
        }

        loadImages();

        return () => {
            isCancelled = true;
        };
    }, []);

    console.log(images)

    return (
        <div className="color-default relative-position flex-container-column content-container">
            <Header/>
                <div className="flex-container-row full-width work-wrapper">
                    <div className="flex-container-column work-projects">
                        <p>Tree Study</p>
                    </div>
                    <div className="flex-container-column project-images">
                        <Gallery 
                            images={images}
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
                    </div>
                </div>
            <Footer />
        </div>
    )
}