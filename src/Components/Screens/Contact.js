import React from "react";
import Wrapper from "./Contact.styles";

const Contact = (props) => {
  return (
    <Wrapper id={props.id}>
      <div>
        <span>
          <i class="fab fa-linkedin fa-4x"></i>
          <p>LinkedIn</p>
        </span>
        <span>
          <i class="fab fa-github-square fa-4x"></i>
          <p>GitHub</p>
        </span>
        <span>
          <i class="far fa-sticky-note fa-4x"></i>
          <p>CV</p>
        </span>
      </div>
    </Wrapper>
  );
};

export default Contact;
