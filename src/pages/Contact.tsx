import Heading from "../components/Heading";
import Seo from "../components/Seo";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Contact "
        description="تماس با نیما سهرابی، توسعه‌دهنده فرانت‌اند."
        canonical="contact"
      />
      <Heading text="Contact" />
    </div>
  );
};

export default Contact;
