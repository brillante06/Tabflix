import { createGlobalStyle } from 'styled-components';

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
        font-family: 'Noto Sans KR', sans-serif;
    } 
    body{
        background:${({ theme }) => theme.bgColor};
        color:${({ theme }) => theme.textColor};
    }
    a{
        color:${({ theme }) => theme.textColor};

    }
    
`;

export default Global;
