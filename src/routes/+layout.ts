import type { LayoutLoad } from "./$types";

// add this to root layout
// to prerender all our pages
// during build time
export const prerender = true;
export const trailingSlash = "always";

// get url path whenever visiting a new page
export const load: LayoutLoad = ({ url }) => {
  return {
    pathname: url.pathname
  };
};
