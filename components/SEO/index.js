import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import settings from "./settings";
import { socialTags } from "./socialtags";
import { COMPANY_NAME, DOMAIN_NAME } from "../../constants/staticInfo";

const SEO = (props) => {
  const { title, description, image, subroute } = props;
  return (
    <Head>
      <title>{title || settings.meta.title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta
        name="keywords"
        content={`${COMPANY_NAME}, IT company, web, web services, web development, software development services`}
      />
      <meta name="robots" content="all" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="canonical"
        href={`${DOMAIN_NAME}/${subroute}`}
        key="canonical"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon_high_res_512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      {socialTags(props).map(({ name, content, property }, i) => {
        return property ? (
          <meta key={i} property={property} content={content} />
        ) : (
          <meta key={i} name={name} content={content} />
        );
      })}
    </Head>
  );
};

SEO.defaultProps = {
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
