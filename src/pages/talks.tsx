import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faPlay } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import Layout from "../components/Layout";
import robwalker from "../images/robwalker.jpg";

// markup
const IndexPage = () => {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    // Attempt to obscure my email address from spambots!
    setEmail(`${"hi"}@${"robwalker"}.co`);
  }, []);

  return (
    <Layout>
      <main>
        <header>
          <a href="/">
            <img id="face" src={robwalker} alt="Rob Walker" />
          </a>
        </header>

        <article>
          <h1>Past talks</h1>

          <h2>
            24th June 2022 - <a href="https://reactnorway.com/">React Norway</a>
          </h2>

          <p>Title: Visual Regression Testing: Why Bother?</p>

          <p>
            <a
              href="https://pitch.com/public/225e24c9-b3f7-4623-b052-05e7aa596708"
              target="_blank"
            >
              <FontAwesomeIcon icon={faPlay} />
              Slides
            </a>
          </p>

          <p>
            <a
              href="/static/Visual-Regression-Testing--Why-bother.pdf"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              Slides (PDF)
            </a>
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default IndexPage;
