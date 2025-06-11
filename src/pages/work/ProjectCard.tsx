import React from "react";
import { Link } from "react-router-dom";
import "./work.css"

interface ProjectCardProps {
    title: string;
    imageUrl: string;
}

export const ProjectCard = ({ title, imageUrl }: ProjectCardProps) => {
    const slug = title.toLowerCase().replace(/\s+/g, "_");
    return (
        <Link to={`/work/${slug}`} className="project-card">
            <img className="landscape-img" src={imageUrl} alt={title} />
            <p>{title}</p>
        </Link>
    );
};
