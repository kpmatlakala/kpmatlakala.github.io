"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, BookOpen, FolderKanban } from "lucide-react";

import { PORTFOLIO_DATA } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import IframeProjectCard from "@/components/ui/IFrameProjectCard";

export default function WorkAndWritingPage() {
  const [mainPortfolioUrl, setMainPortfolioUrl] = useState(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://kpmatlakala.co.za/"
  );

  useEffect(() => {
    const isLocalBlog =
      window.location.hostname === "blogs.localhost" ||
      window.location.hostname === "blogs.127.0.0.1" ||
      window.location.hostname === "blogs.localhost.";

    if (isLocalBlog) {
      const port = window.location.port ? `:${window.location.port}` : "";
      setMainPortfolioUrl(`http://localhost${port}`);
    }
  }, []);

  const sortedProjects = [...PORTFOLIO_DATA.projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return parseInt(b.year) - parseInt(a.year);
  });
  const iframeProject = sortedProjects.find((project) => project.id === 4);
  const regularProjects = sortedProjects.filter(
    (project) => project.id !== 4
  );

  return (
    <>
      <Head>
        <title>Work &amp; Writing | Kabelo P. Matlakala</title>
        <meta
          name="description"
          content="Projects and writing by Kabelo P. Matlakala."
        />
      </Head>

      <main className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border/20 bg-background/90 backdrop-blur-md">
          <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link
              href={mainPortfolioUrl}
              className="font-audiowide text-2xl text-primary"
              aria-label="Go to the main portfolio"
            >
              KPM
            </Link>
            <nav
              aria-label="Work and writing navigation"
              className="flex items-center gap-4 text-sm"
            >
              <a
                href="#projects"
                className="hidden hover:text-primary sm:inline"
              >
                Projects
              </a>
              <a
                href="#articles"
                className="hidden hover:text-primary sm:inline"
              >
                Articles
              </a>
              <Link
                href={mainPortfolioUrl}
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Portfolio
              </Link>
            </nav>
          </div>
        </header>

        <section className="px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Work &amp; Writing
              </p>
              <h1 className="font-audiowide text-4xl leading-tight md:text-6xl">
                Projects and ideas, in one place.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Explore selected builds and read technical notes, project
                lessons, and reflections as articles are published.
              </p>
            </div>

            <section id="projects" className="scroll-mt-24">
              <div className="mb-8 flex items-center gap-3">
                <FolderKanban className="h-6 w-6" />
                <h2 className="text-3xl font-bold">Projects</h2>
              </div>

              {iframeProject && (
                <div className="mb-8">
                  <IframeProjectCard project={iframeProject} />
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {regularProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section id="articles" className="scroll-mt-24 pt-16 md:pt-24">
              <div className="mb-8 flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                <h2 className="text-3xl font-bold">Articles</h2>
              </div>

              <div className="rounded-xl border border-border bg-card px-6 py-10 text-center">
                <p className="text-xl font-medium">Writing is coming soon</p>
                <p className="mt-2 text-muted-foreground">
                  Technical articles and project notes will appear here.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
