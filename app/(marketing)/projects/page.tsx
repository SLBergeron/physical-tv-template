import { type Metadata } from "next";
import { getAllProjects } from "@/lib/blog";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Projects & Clients",
  description:
    "Explore PhysicalTV Studios' portfolio of creative intelligence projects across fitness, wellness, and medical storytelling. See how we've helped brands bridge creativity and commerce through strategic frameworks and media production.",
  keywords: [
    "media projects",
    "fitness content production",
    "wellness brand strategy",
    "medical storytelling",
    "creative intelligence portfolio",
    "brand case studies",
    "content strategy examples"
  ],
  openGraph: {
    title: "Projects & Clients | PhysicalTV Studios",
    description:
      "Portfolio showcasing how ideas take shape, move through culture, and create impact across media, wellness, and fitness ecosystems.",
    url: "https://physical.tv/projects",
    images: [
      {
        url: "/Image-Profile-Frederick.jpeg",
        width: 1200,
        height: 630,
        alt: "PhysicalTV Studios Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Clients | PhysicalTV Studios",
    description:
      "Portfolio showcasing how ideas take shape, move through culture, and create impact.",
    images: ["/Image-Profile-Frederick.jpeg"],
  },
};

export default async function ArticlesIndex() {
  let blogs = await getAllProjects();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Projects & Clients</Heading>
          <Subheading className="text-center">
            Selected work showcasing how ideas take shape, move through culture, and create impact.
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20 w-full mb-10">
          {blogs.slice(0, 2).map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
          {blogs.slice(2).map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
