import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

const Seo: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  noIndex,
  noFollow,
}) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, titleTemplate, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noIndex && <meta name="robots" content="noIndex" />}
      {noFollow && <meta name="robots" content="noFollow" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.keywords && <meta name="keywords" content={keywords?.join(",")} />}
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteUrl
        defaultDescription: description
      }
    }
  }
`;
