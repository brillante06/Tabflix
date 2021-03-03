import { createGlobalStyle } from 'styled-components';
import '../fonts/fonts.css';

interface themeInterface {
    theme: {
        bgColor: string;
        textColor: string;
        toggleBorder: string;
        gradient: string;
        translateFirst: string;
        translateSecond: string;
    };
}

const Global = createGlobalStyle<themeInterface>`
    *{
        font-family:'spoqaNeo',sans-serif;
    }
    body{
        background:${({ theme }) => theme.bgColor};
        color:${({ theme }) => theme.textColor};
    }
`;

export default Global;
