import React, { useEffect } from "react";
import ContactForm from "../../components/Contact";

function Contact() {
  useEffect(() => {
    document.title = "Ecom | Contact";
  }, []);
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default Contact;
