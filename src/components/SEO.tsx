import React from "react";
import { Helmet } from "react-helmet";
interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  schema?: any;
}
export const SEO = ({
  title,
  description,
  image = "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1200",
  type = "website",
  schema
}: SEOProps) => {
  const siteTitle = "LongKhang Wagyu Shop";
  const fullTitle = `${title} | ${siteTitle}`;
  return <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="canonical" href={window.location.href} />
      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Structured Data */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>;
};