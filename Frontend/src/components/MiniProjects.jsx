import MiniProjectCard from "./MiniProjectCard";
import simonGame from "../assets/sideProjects/simonGame.png";
import quizGame from "../assets/sideProjects/quizGame.png";
import blog from "../assets/sideProjects/blog.png";

const MiniProjects = () => {
  return (
    <section className=" px-10 py-4 md:px-24 mb-12 mx-auto ">
      <p className="text-2xl font-semibold text-center mb-10">
        Things I’ve Built While Learning & Exploring
      </p>

      <div
        className="grid grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      gap-8"
      >
        <MiniProjectCard
          title="Blog Platform"
          description={
            "A full-stack blog application with user authentication, blog creation, editing, and image uploads, built using the MERN stack."
          }
          image={blog}
          liveUrl={"https://primetradeblog-application.vercel.app/"}
        />
        <MiniProjectCard
          title="Simon Game"
          description={
            "A memory-based game where players repeat an increasing sequence of colors, built using JavaScript and DOM manipulation"
          }
          image={simonGame}
          liveUrl={"https://pooja184.github.io/simon-game/"}
        />

        <MiniProjectCard
          title="Quiz Game"
          description={
            "An interactive quiz game that tests knowledge with multiple-choice questions and instant score feedback."
          }
          image={quizGame}
          liveUrl={
            "https://quiz-game-a0334euss-pooja-bhambids-projects.vercel.app/"
          }
        />
        
      </div>
    </section>
  );
};

export default MiniProjects;
