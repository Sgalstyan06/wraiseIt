import { DOMAIN_NAME } from "../constants/staticInfo";

const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : `${DOMAIN_NAME}`;
