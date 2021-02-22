import { createGlobalStyle } from "styled-components";

import logoFont from "../Assets/Fonts/Shadow_regular.ttf";
import secondary from "../Assets/Fonts/ClintMarker.ttf";

export default createGlobalStyle`
   @font-face {
        font-family: 'logo';
        src: local('logo'), local('logo'),
        url(${logoFont}) format('truetype'),
        url(${logoFont}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'text';
        src: local('text'), local('text'),
        url(${secondary}) format('truetype'),
        url(${secondary}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
