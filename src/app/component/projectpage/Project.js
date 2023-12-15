"use client";
import React, { useState } from "react";
import { project as Projects } from "../../data/project";
import { kelson_regular, kelson_meduim } from "@/app/fonts/kelson/kelson";

import Img from "./imgproject/img";
import Ligne from "./ligne/ligne";

import "./project.min.css";
import "../../page.min.css";

export default function Project(props) {

    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (project) => {
        setHoveredProject(project);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="project">
            <div className="mask">
                {/* <div className="bgmask" /> */}
                {hoveredProject && (
                    <div className="project-cover">
                        <Img src={hoveredProject.cover} />
                    </div>
                )}
                <div className="projects">
                    <div className="title-project">
                        <h4 className={kelson_meduim.className}>PROJETS</h4>
                        <span className={kelson_regular.className}>{Projects.length}</span>
                    </div>
                    <div className="projects-list">
                        {Projects.map((project, e) => (
                            <div
                                className="project-list"
                                key={project.id}
                                onMouseEnter={() => handleMouseEnter(project)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Ligne
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    category={project.category}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
