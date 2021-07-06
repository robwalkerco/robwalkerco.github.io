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
  // padding: 96,
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "auto",
  textAlign: "center",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: 600,
  fontSize: 16,
  verticalAlign: "5%",
};

const imageStyle = {
  borderRadius: "50%",
  border: "2px solid #fff",
  height: "82px",
  width: "82px",
};

const title = {
  fontSize: "30px",
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
          <a style={link} href={`mailto:${email}`}>
            <FontAwesomeIcon style={icon} icon={faEnvelope} />
            {email}
          </a>

          <a style={link} href="https://twitter.com/robwalkerco">
            <FontAwesomeIcon style={icon} icon={faTwitterSquare} />
            @robwalkerco
          </a>

          <a style={link} href="https://github.com/robwalkerco">
            <FontAwesomeIcon style={icon} icon={faGithubSquare} />
            github.com/robwalkerco
          </a>

          <a style={link} href="https://www.linkedin.com/in/robwalkerco/">
            <FontAwesomeIcon style={icon} icon={faLinkedin} />
            linkedin.com/in/robertwalkerco
          </a>
        </article>
      </main>
    </Layout>
  );
};

export default IndexPage;
