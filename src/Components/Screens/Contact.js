import React from "react";
import Wrapper from "./Contact.styles";
import CV from "../../Assets/Docs/Balazs_Danyadi _Lebenslauf.pdf";

const Contact = (props) => {
  return (
    <Wrapper id={props.id}>
      <div>
        <a
          href={"mailto:balazs.danyadi@gmail.com"}
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-envelope-open-text fa-4x"></i>
          <p>E-Mail</p>
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
