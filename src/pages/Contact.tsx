import ContactForm from "../components/contact/ContactForm.js";
import Heading from "../components/Heading";
import Seo from "../components/Seo";


const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Contact "
        description="Get in touch with Nima Sohrabi, a front-end developer with a passion for web development and design. Reach out for inquiries, collaborations, or just to connect!"
        canonical="contact"
        keywords="Contact Nima Sohrabi, ارتباط با نیما سهرابی, تماس با نیما سهرابی, Nima Sohrabi Web Developer Contact, Contact Form Nima Sohrabi, Hire Nima Sohrabi, ارتباط با توسعه‌دهنده نیما سهرابی"
      />
      <Heading text="Contact Me" />
      <ContactForm />
    </div>
  );
};

export default Contact;
