import settings from "./settings";
import { DOMAIN_NAME } from "../../constants/staticInfo";

export const socialTags = ({
  openGraphType,
  subroute,
  title,
  description,
  createdAt,
  updatedAt,
}) => {
  return [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    {
      property: "twitter:url",
      content: `${DOMAIN_NAME}/${subroute ? subroute : ""}`,
    },
    {
      property: "twitter:domain",
      content: "wraiseit.com",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:creator",
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    {
      name: "twitter:image",
      content: `${DOMAIN_NAME}/assets/images/socialImages/facebook_large_image.jpg`,
    },
    { name: "twitter:image:alt", content: title },
    { property: "og:title", content: title },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: `${DOMAIN_NAME}/${subroute ? subroute : ""}`,
    },
    {
      property: "og:image",
      content: `${DOMAIN_NAME}/assets/images/socialImages/facebook_large_image.jpg`,
    },
    { property: "og:image:alt", content: title },
    { property: "og:description", content: description },
    {
      property: "og:site_name",
      content: settings && settings.meta && settings.meta.title,
    },
    {
      property: "og:published_time",
      content: createdAt || new Date().toISOString(),
    },
    {
      property: "og:modified_time",
      content: updatedAt || new Date().toISOString(),
    },
  ];
};
