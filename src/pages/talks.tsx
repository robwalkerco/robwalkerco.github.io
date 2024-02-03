import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faPlay,
  faVideo,
  faLink,
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

        <h1>Past talks</h1>
        <article>
          <h2>
            19th&nbsp;May&nbsp;2023&nbsp;-{" "}
            <a href="https://chainreactconf.com/">Chain&nbsp;React</a>
          </h2>

          <h3>0 to 1 (Million Downloads); PUMAs Mobile Success Story</h3>

          <p>
            <a
              href="https://www.youtube.com/watch?v=teuZZTsl_F8"
              target="_blank"
            >
              <FontAwesomeIcon icon={faVideo} />
              YouTube
            </a>
          </p>

          <p>
            <a href="/0-to-1-PUMAs-Mobile-Success-Story.pdf" target="_blank">
              <FontAwesomeIcon icon={faFilePdf} />
              Slides (PDF)
            </a>
          </p>

          <h2>Links</h2>
          <p>
            <a
              href="https://formidable.com/blog/2022/mobile-app-rollout/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              Formidable: Mobile App Rollout Blog Post
            </a>
          </p>
          <p>
            <a href="https://www.ada.gov/topics/intro-to-ada" target="_blank">
              <FontAwesomeIcon icon={faLink} />
              ADA: Intro to ADA
            </a>
          </p>
          <p>
            <a
              href="https://www.iweb.co.uk/2016/10/inclusive-design-why-our-websites-should-more-accessible"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              iWeb: Including Web Design Blog Post
            </a>
          </p>
          <p>
            <a
              href="https://formidable.com/blog/2023/ios-voiceover-guide-for-developers/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              Formidable: iOS VoiceOver Guide For Developers Blog Post
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=qDm7GiKra28"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              YouTube: How to navigate your iPhone or iPad with VoiceOver
            </a>
          </p>
          <p>
            <a
              href="https://formidable.com/open-source/react-native-ama/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              GitHub: React Native AMA
            </a>
          </p>
          <p>
            <a
              href="https://www.statista.com/statistics/262157"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} />
              Statista: Market share of mobile operating systems in India from
              2012 to 2022
            </a>
          </p>
        </article>

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
