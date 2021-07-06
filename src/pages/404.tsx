import * as React from "react";
import Layout from "../components/Layout";
import robwalker from "../images/robwalker.png";

// styles
const pageStyles = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "auto",
  textAlign: "center",
};

const imageStyle = {
  borderRadius: "50%",
  border: "2px solid #fff",
  height: "82px",
  width: "82px",
};

const title = {
  fontSize: "52px",
};

const subTitle = {
  fontSize: "26px",
  padding: "0 25%",
};

const link = {
  textDecoration: "none",
  color: "#fff",
  lineHeight: "30px",
  display: "block",
};

// markup
const NotFoundPage = () => (
  <Layout>
    <main style={pageStyles}>
      <header>
        <img style={imageStyle} src={robwalker} alt="Rob Walker" />
      </header>

      <article>
        <h1 style={title}>Rob Walker</h1>

        <p style={subTitle}>This page does not exist (yet?)</p>

        <p>
          <a style={link} href="/">
            {`<- Home`}
          </a>
        </p>
      </article>
    </main>
  </Layout>
);

export default NotFoundPage;
