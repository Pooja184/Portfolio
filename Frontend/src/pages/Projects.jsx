import React from 'react'
import HeroPage from '../components/HeroPage'
import ProjectSection from '../components/ProjectSection'
import EcommerceProject from '../assets/e-commerce.png'
import TourismProject from '../assets/tourism.png'
import taskManagement from '../assets/taskManagement.png'


const Projects = () => {
  return (
    <div>
      <HeroPage text1={"My Work"} text2={"What I’ve Built"} />
      <ProjectSection imgSrc={EcommerceProject} description={'This eCommerce project offers a smooth and responsive online shopping experience. It’s built using React and Context API for efficient state management, with an integrated payment gateway for secure and easy checkout. The website includes product listings, a detailed product view, and a cart system. It’s designed with Tailwind CSS to ensure a clean, modern interface and great performance on all devices.'} link={"https://e-commercefrontend-omega.vercel.app/"}/>
      <ProjectSection imgSrc={TourismProject} description={'This tourism website highlights the natural beauty and cultural richness of Ratnagiri. It features sections for beaches, temples, trekking spots, and adventure activities. Built with React and Redux, it provides seamless state handling and smooth navigation. The site also includes a tour booking form with a dummy payment gateway, allowing users to book their favorite experiences easily. It’s fully responsive and designed for a pleasant, informative browsing experience.'} link={"https://tourism-management-psi.vercel.app/"}/>
      <ProjectSection imgSrc={taskManagement} description={'This task management application is built to help users organize their work and track progress efficiently. It allows users to create, update, and manage tasks with different statuses, making daily workflow easier. The frontend is developed using React, while the backend is powered by Node.js and Express, with Prisma used for database management to ensure clean and efficient data handling. Real-time updates are implemented using Socket.io, allowing task changes to reflect instantly across the application. The project also includes user authentication, secure data storage, and a fully responsive interface, providing a smooth and reliable user experience across devices.'} link={"https://task-management-five-xi.vercel.app/"}/>
      
    </div>
  )
}

export default Projects
