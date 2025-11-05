import React from 'react'
import HeroPage from '../components/HeroPage'
import ProjectSection from '../components/ProjectSection'
import EcommerceProject from '../assets/e-commerce.png'
import TourismProject from '../assets/tourism.png'


const Projects = () => {
  return (
    <div>
      <HeroPage text1={"My Work"} text2={"What I’ve Built"} />
      <ProjectSection imgSrc={EcommerceProject} description={'This eCommerce project offers a smooth and responsive online shopping experience. It’s built using React and Context API for efficient state management, with an integrated payment gateway for secure and easy checkout. The website includes product listings, a detailed product view, and a cart system. It’s designed with Tailwind CSS to ensure a clean, modern interface and great performance on all devices.'} link={"https://e-commercefrontend-omega.vercel.app/"}/>
      <ProjectSection imgSrc={TourismProject} description={'This tourism website highlights the natural beauty and cultural richness of Ratnagiri. It features sections for beaches, temples, trekking spots, and adventure activities. Built with React and Redux, it provides seamless state handling and smooth navigation. The site also includes a tour booking form with a dummy payment gateway, allowing users to book their favorite experiences easily. It’s fully responsive and designed for a pleasant, informative browsing experience.'} link={"https://tourism-management-psi.vercel.app/"}/>
      
    </div>
  )
}

export default Projects
