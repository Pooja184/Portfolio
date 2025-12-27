import React from "react";
import HeroPage from "../components/HeroPage";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <>
      <HeroPage text1={"Contact"} text2={" Get In Touch"} />
     <ContactForm/>
    </>
  );
};

export default Contact;
