"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { ProjectCard } from "delightplus-ui/cards";
import IframeProjectCard from "../ui/IFrameProjectCard";
import { Button } from "delightplus-ui";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const { projects } = PORTFOLIO_DATA;

  // Sort projects by featured and year
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });

  // Pull out the iframe project explicitly
  const iframeProject = sortedProjects.find((p) => p.id === 4);

  // Show top 3 regular (non-iframe) projects
  const firstThree = sortedProjects
    .filter((p) => p.id !== 4)
    .slice(0, 3);

  // Show remaining (excluding iframe and top 3)
  const remainingProjects = sortedProjects.filter(
    (p) => !firstThree.includes(p) && p.id !== 4
  );

  return (
    <section id="projects" className="scroll-mt-0 py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-audiowide mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing different skills and
            approaches to solving complex design challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firstThree.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Iframe project full-width */}
          {iframeProject && (
            <div className="col-span-full">
              <IframeProjectCard project={iframeProject} />
            </div>
          )}

          {/* Show remaining projects on toggle */}
          {showAll &&
            remainingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Toggle Button */}
        {remainingProjects.length > 0 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="hover:bg-primary/80 transition"
            >
              {showAll ? "-- Show Less --" : "-- Show More --"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
