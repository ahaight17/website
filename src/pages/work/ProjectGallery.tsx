import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomImage } from "../../utils/contants";
import { fetchProjectImages } from "../../helper/getImagesFromApi";
import { Gallery } from "react-grid-gallery";
import "./work.css"

export const ProjectGallery = () => {
    const { projectName } = useParams();
    const [images, setImages] = useState<CustomImage[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const result = await fetchProjectImages(projectName!);
                setImages(result);
            } catch (e: any) {
                setError(e.message);
            }
        };
        load();
    }, [projectName]);

    if (error) return <div>Error: {error}</div>;

    return <Gallery images={images} />;
};
