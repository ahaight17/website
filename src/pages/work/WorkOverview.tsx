import React, { FunctionComponent } from "react";
import { CDN_URL } from "../../utils/contants";
import { Footer } from "../../components/aesthetic/Footer";
import { Header } from "../../components/aesthetic/Header";
import { ProjectCard } from "./ProjectCard";
import "../../components/aesthetic/aesthetic.css"
import "./work.css"

type ProjectDefinition = {
    title: string;
    leadImage: string;
}

export const WorkOverview: FunctionComponent = () => {
    const projects: ProjectDefinition[] = [
        { title: "Tree Study", leadImage: `${CDN_URL}/work/tree_study/tree_008.jpg` }
    ]

    return (
        <div className="color-default relative-position flex-container-column content-container">
            <Header/>
                <div className="project-grid">
                    { projects.map((project: ProjectDefinition) => (
                        <ProjectCard 
                            key={project.title}
                            title={project.title}
                            imageUrl={project.leadImage}
                        />
                    ))}
                </div>
            <Footer />
        </div>
    )
}