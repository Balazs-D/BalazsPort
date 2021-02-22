import React from "react";

import styled from "styled-components";

const ContactCont = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  background-color: orange;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0vw;
  transform: rotate(0deg);
  /* right: -100vw; */
`;

const Contact = (props) => {
  return <ContactCont id={props.id}></ContactCont>;
};

export default Contact;
