import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { CustomImage } from "../../utils/contants";
import { fetchImagesStream } from "../../helper/getImagesFromApi";
import Slider from "react-slick";
import { Loading } from "../../components/aesthetic/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./work.css";
import { Error } from "../../pages/Error";
import { Header } from "../../components/aesthetic/Header";
import { Footer } from "../../components/aesthetic/Footer";

export const ProjectGallery = () => {
    const { projectName } = useParams();
    const [images, setImages] = useState<CustomImage[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, [slider1, slider2, images.length]);

    useEffect(() => {
        let isMounted = true;
        setImages([]);
        setError(null);
        setLoading(true);

        const load = async () => {
            try {
                for await (const page of fetchImagesStream(`work/${projectName}`)) {
                    if (!isMounted) return;
                    setImages(prev => [
                        ...prev,
                        ...page.map((p) => ({
                            src: p.url,
                            original: p.url,
                            height: 120,
                            width: 150,
                        }))
                    ]);
                }
            } catch (e: any) {
                if (isMounted) setError(e.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        load();

        return () => { isMounted = false; };
    }, [projectName]);

    if (error) return <Error />;
    if (loading && images.length === 0) return <Loading />;

    const mainSettings = {
        asNavFor: nav2 as Slider | undefined,
        ref: slider1,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
    };

    const thumbSettings = {
        asNavFor: nav1 as Slider | undefined,
        ref: slider2,
        slidesToShow: Math.min(5, images.length),
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: true,
        centerMode: images.length > 5,
        centerPadding: "10px"
    };

    return (
         <div className="color-default relative-position flex-container-column content-container">
            <Header />
            <div className="project-gallery-wrapper">
                <div className="project-main-slider" style={{ width: "100%" }}>
                    <Slider {...mainSettings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <img
                                    src={img.src}
                                    alt={`slide-${idx}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="project-thumb-slider">
                    <Slider {...thumbSettings}>
                        {images.map((img, idx) => (
                            <div key={idx}>
                                <img
                                    src={img.src}
                                    alt={`thumb-${idx}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer />
         </div>
    );
};
