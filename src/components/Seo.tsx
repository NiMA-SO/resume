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
    </Helmet>
  );
};

export default Seo;
