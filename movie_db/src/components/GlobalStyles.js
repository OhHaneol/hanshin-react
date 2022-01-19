import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle `
${reset}
    body {
        color: red;
    }
    button {
        color: blue;
    }
`;

export default GlobalStyles;