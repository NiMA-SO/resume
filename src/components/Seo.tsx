import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
}

const Seo = ({ title, description, canonical , keywords }: Props) => {
  return (
    <Helmet>
      <title>{title} | Nima Sohrabi - نیما سهرابی</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://nima-sohrabi.ir/${canonical}`} />
      <meta
        name="keywords"
        content={keywords}
      />
    </Helmet>
  );
};

export default Seo;
