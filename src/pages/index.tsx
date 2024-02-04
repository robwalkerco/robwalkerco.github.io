import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
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
          <h1>Rob Walker</h1>

          <h2>
            Software Engineering Manager | Specialising in React Native |
            Working at{" "}
            <a href="https://www.nearform.com" target="_blank">
              Nearform
            </a>
          </h2>

          <p>
            <a href="/talks">
              <FontAwesomeIcon icon={faMicrophoneLines} />
              Past talks -&gt;
            </a>
          </p>

          <p>
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
              {email}
            </a>
          </p>

          <p>
            <a href="https://twitter.com/robwalkerco">
              <FontAwesomeIcon icon={faTwitterSquare} />
              @robwalkerco
            </a>
          </p>

          <p>
            <a href="https://github.com/robwalkerco">
              <FontAwesomeIcon icon={faGithubSquare} />
              github.com/robwalkerco
            </a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/robwalkerco/">
              <FontAwesomeIcon icon={faLinkedin} />
              linkedin.com/in/robertwalkerco
            </a>
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default IndexPage;
