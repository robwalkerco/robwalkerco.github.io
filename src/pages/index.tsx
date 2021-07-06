import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

const icon = {
  marginRight: "10px",
};

// markup
const IndexPage = () => {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    // Attempt to obscure my email address from spambots!
    setEmail(`${"hi"}@${"robwalker"}.co`);
  }, []);

  return (
    <Layout>
      <main style={pageStyles}>
        <header>
          <img style={imageStyle} src={robwalker} alt="Rob Walker" />
        </header>

        <article>
          <h1 style={title}>Rob Walker</h1>

          <p style={subTitle}>
            Software Engineer | Specialising in React Native, BLE, NFC |
            Software/AWS consultant | Papertrail.io co-founder
          </p>

          <p>
            <a style={link} href={`mailto:${email}`}>
              <FontAwesomeIcon style={icon} icon={faEnvelope} />
              {email}
            </a>
          </p>

          <p>
            <a style={link} href="https://twitter.com/robwalkerco">
              <FontAwesomeIcon style={icon} icon={faTwitterSquare} />
              @robwalkerco
            </a>
          </p>

          <p>
            <a style={link} href="https://github.com/robwalkerco">
              <FontAwesomeIcon style={icon} icon={faGithubSquare} />
              github.com/robwalkerco
            </a>
          </p>

          <p>
            <a style={link} href="https://www.linkedin.com/in/robwalkerco/">
              <FontAwesomeIcon style={icon} icon={faLinkedin} />
              linkedin.com/in/robertwalkerco
            </a>
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default IndexPage;
