import React, {useRef} from "react";
import HeroSection from "./components/hero.section";
import Navbar from "./components/navbar";
import StarsCanvas from "./components/star.field";
import {SkillList} from "./components/skill.tiles";

const FrontEndList = ["react", "blazor", "html5", "css3", "javascript", "tailwindcss"]

const BackEnd = ["nestjs", "typescript", "c", "cplusplus", "csharp", "nodejs", "python"]

const DevOps = ["githubactions", "docker", "ansible", "jenkins", "kubernetes", "nginx"]


function App() {
  const ref = useRef();

  return (
      <main
          className="flex min-h-screen min-w-screen flex-col bg-[#101720] overflow-hidden">
          <Navbar ParallaxRef={ref.current}/>
          <div className="container mt-24 mx-auto px-12 py-4 z-20">
              <HeroSection/>
              <SkillList list={FrontEndList} />
              <SkillList list={BackEnd} />
              <SkillList list={DevOps} />
          </div>
          <StarsCanvas/>
      </main>
  )
}

export default App;
