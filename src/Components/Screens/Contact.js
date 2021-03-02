import React from "react";
import Wrapper from "./Contact.styles";
import CV from "../../Assets/Docs/CV.pdf";

const Contact = (props) => {
  return (
    <Wrapper id={props.id}>
      <div>
        <a
          href={"https://www.linkedin.com/in/balazs-danyadi/"}
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-4x"></i>
          <p>LinkedIn</p>
        </a>
        <a
          href={"https://github.com/Balazs-D"}
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-github-square fa-4x"></i>
          <p>GitHub</p>
        </a>

        <a href={CV} rel="noreferrer" target="_blank">
          <i class="far fa-sticky-note fa-4x"></i>
          <p>CV</p>
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;
