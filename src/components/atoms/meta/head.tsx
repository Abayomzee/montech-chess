import NextHead from "next/head";

const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
}
const Head: React.FC<Props> = (props) => {
  const { title, description, keywords, url, ogImage } = props;
  const pageTitle = `Chess | ${title}`;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{pageTitle || ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />
      
      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={title || ""} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || defaultOGImage} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* <!-- Font awesome (icon) --> */}
    <script
      src="https://kit.fontawesome.com/6d51bc153f.js"
      crossOrigin="anonymous"
    ></script>
    </NextHead>
  );
};

export default Head;
