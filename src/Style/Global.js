import { createGlobalStyle } from "styled-components";

import logoFont from "../Assets/Fonts/Shadow_regular.ttf";

export default createGlobalStyle`
   @font-face {
        font-family: 'logo';
        src: local('logo'), local('logo'),
        url(${logoFont}) format('truetype'),
        url(${logoFont}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
