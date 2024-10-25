import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  canonical: string;
}

const Seo = ({ title, description, canonical }: Props) => {
  return (
    <Helmet>
      <title>{title} | Nima Sohrabi - نیما سهرابی</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://nima-sohrabi.ir/${canonical}`} />
      <meta
        name="keywords"
        content="Nima Sohrabi, نیما سهرابی, توسعه‌دهنده وب, رزومه نیما سهرابی, پروژه‌های فرانت‌اند, توسعه‌دهنده React, نمونه کارهای طراحی وب,Nima Sohrabi, نیما سهرابی, Front-End Developer, Web Development, React, Portfolio, Development"
      />
    </Helmet>
  );
};

export default Seo;
