import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faPlay, faVideo } from "@fortawesome/free-solid-svg-icons";
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

        <h1>Past talks</h1>

        <article>
          <h2>
            2nd&nbsp;September&nbsp;2022&nbsp;-{" "}
            <a href="https://www.react-native.eu/">React&nbsp;Native&nbsp;EU</a>
          </h2>

          <h3>Visual Regression Testing in React Native</h3>

          <p>
            <a
              href="https://www.youtube.com/watch?v=cRbreZz8LHk"
              target="_blank"
            >
              <FontAwesomeIcon icon={faVideo} />
              YouTube
            </a>
          </p>

          <p>
            <a
              href="pitch.com/public/6288cd96-266b-4aaa-8e76-7efe4a975e3a"
              target="_blank"
            >
              <FontAwesomeIcon icon={faPlay} />
              Slides
            </a>
          </p>

          <p>
            <a
              href="/Visual-Regression-Testing-in-React-Native.pdf"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              Slides (PDF)
            </a>
          </p>
        </article>

        <article>
          <h2>
            24th&nbsp;June&nbsp;2022&nbsp;-{" "}
            <a href="https://reactnorway.com/">React&nbsp;Norway</a>
          </h2>

          <h3>Visual Regression Testing: Why Bother?</h3>

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
              href="/Visual-Regression-Testing--Why-bother.pdf"
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
