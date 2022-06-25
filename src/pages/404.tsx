import * as React from "react";
import Layout from "../components/Layout";
import robwalker from "../images/robwalker.jpg";

// markup
const NotFoundPage = () => (
  <Layout>
    <main>
      <header>
        <a href="/">
          <img id="face" src={robwalker} alt="Rob Walker" />
        </a>
      </header>

      <article>
        <h1>Rob Walker</h1>

        <h2>This page does not exist (yet?)</h2>

        <p>
          <a href="/">{`<- Home`}</a>
        </p>
      </article>
    </main>
  </Layout>
);

export default NotFoundPage;
