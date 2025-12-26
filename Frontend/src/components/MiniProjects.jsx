import MiniProjectCard from "./MiniProjectCard";
import taskManagement from "../assets/taskManagement.png"
const MiniProjects = () => {
  return (
    <section className=" px-10 py-4 md:px-24 mb-12 mx-auto ">
      
      <p className="text-2xl font-semibold text-center mb-10">
        Things I’ve Built While Learning & Exploring
      </p>

      <div className="grid grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      gap-8">
        <MiniProjectCard title="Task Management App"  description={"Real-time task management app using React, Prisma & Socket.io."}image={taskManagement} liveUrl={"https://task-management-five-xi.vercel.app/"}/>
        
        <MiniProjectCard title="Project Two" />
        <MiniProjectCard title="Project Three" />
        <MiniProjectCard title="Project Four" />
        <MiniProjectCard title="Project Five" />
        <MiniProjectCard title="Project Six" />
      </div>
    </section>
  );
};

export default MiniProjects;
