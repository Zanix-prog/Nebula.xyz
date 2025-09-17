import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    name: "Astucess.xyz",
    category: "Web Development",
    tools: "React, TailwindCSS, JavaScript",
    image: "/images/project-1.webp",
    description:
      "A modern web application built for showcasing services and content online.",
    link: "https://astucess.github.io/Astucess.xyz",
  },
  {
    id: 2,
    name: "PlutoWebWorks.com",
    category: "Web Development",
    tools: "Next.js, TypeScript, CSS",
    image: "/images/project-2.webp",
    description:
      "A portfolio site for a creative agency with responsive design and animations",
    link: "https://astucess.github.io/PlutoWebWorks.com"
  },
  {
    id: 3,
    name: "PORTFOLIO",
    category: "Personal Project",
    tools: "React, Three.js, Framer Motion",
    image: "/images/project-3.webp",
    description:
      "My personal portfolio showcasing 3D projects and interactive web experiences.",
    link: "https://astucess.github.io/Portfolio.com"
  },
  {
    id: 4,
    name: "PlutoVoyage",
    category: "Space Themed 3D Agency ",
    tools: "React, Node.js, MongoDB",
    image: "/images/project-4.webp",
    description:
      "A Space Themed Website Agency With Animated Portfolio .",
    link: "https://pluto-voyage-com.vercel.app/"
  },
  {
    id: 5,
    name: "Zanix Portfolio",
    category: "Personal Project",
    tools: "React, TailwindCSS, Three.js",
    image: "/images/project-5.webp",
    description:
      "Showcasing my web development projects, design works, and creative experiments.",
    link: "https://portfoliocom-nine.vercel.app/",
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 300,
      delay: 0.9,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                <h3>{project.id < 10 ? `0${project.id}` : project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
                <h4>Project Overview</h4>
                <p>{project.description}</p>
                <WorkImage image={project.image} alt={project.name} link={project.link}/>
                {/* <WorkImage image={project.image} alt={project.name} link={project.link} /> */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
