import React from "react";
import HeroPage from "../components/HeroPage";
import Second from "../components/Second";
import Third from "../components/Third";
import First from "../components/First";

const About = () => {
  const beliefs = [
    {
      title: "CREATIVITY",
      description:
        "I love the part where logic meets imagination. Whether I’m styling a button or structuring a backend route, I enjoy finding simple, creative ways to solve problems.",
    },
    {
      title: "CONSISTENCY",
      description:
        "I’ve learned that small, steady efforts matter. Writing clean code, keeping files organized, and following patterns might seem boring — but they really pay off long term.",
    },
    {
      title: "LEARNING",
      description:
        "I never stop learning. From struggling with my first JavaScript loop to building full-stack apps, each step taught me something valuable — and I’m still growing.",
    },
    {
      title: "COMMUNICATION",
      description:
        "Tech can be complex, but talking about it shouldn't be. I always try to explain things clearly, whether I’m discussing a feature with a teammate or explaining a bug.",
    },
    {
      title: "RESILIENCE",
      description:
        "Some bugs take hours. Some fixes break three other things. But I’ve realized — that’s just part of the journey. I’ve become more patient, more focused, and more confident.",
    },
    {
      title: "USER-FIRST",
      description:
        "I always ask: “Would this make sense to a user?” I believe great interfaces aren’t about showing off skills — they’re about making things easy and enjoyable for real people.",
    },
  ];

  const descriptions = [
    {
      description:
        "When I joined Information Technology, I honestly had no idea about coding. In my first year, I started writing basic C++ programs, and to my surprise, I really enjoyed it. That’s where it all began.",
    },
    {
      description:
        "I got curious and started exploring different areas like Data            Science, IoT, Networking, and Web Development. Out of everything, web development felt the most exciting to me. So I began creating small projects with HTML, CSS, and JavaScript.",
    },
    {
      description:
        " Slowly, I moved on to building complete full-stack applications,            working on both the frontend and backend. Each project helped me learn something new and made me more confident in my skills. That’s how I found my way here — constantly learning, building, and getting  better.",
    },
  ];

  const work=[
    {
      description:"I don’t just do tasks because they’re assigned. I try to understand what’s really needed and why it matters.",
    },
     {
      description:
        "I focus on meaningful results that actually make an impact. I adapt quickly when things change and stay calm under pressure.",
    },
    {
      description:
        " I take feedback seriously and use it to improve fast. When situations get unclear or challenging, I don’t back off.  I stay reliable and steady. You can count on me to show up, take ownership, and get the work done the right way.",
    },

  ]

  return (
    <div>
      <HeroPage text1={"About"} text2={"Hi, I'am Pooja"} />
      <Second
        heading={"Building. Breaking. Learning. Growing .  one line daily."}
        description={
          "I’m a developer who learns by doing — every project, every challenge, and every late-night bug fix helps me grow and get better at what I love. From designing smooth frontends to building solid backend systems, I enjoy working across the full stack. I mostly work with the MERN stack and take pride in writing clean, efficient, and maintainable code."
        }
      />
      <First heading={"How I Got Here"} items={descriptions}/>
      <Third heading="My Values & Beliefs" items={beliefs} />
      <First heading={"Why Work With Me"} items={work}/>
    </div>
  );
};

export default About;
