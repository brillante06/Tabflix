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
        font-size: 100%;
    } 
    body{
        background:${({ theme }) => theme.bgColor};
        color:${({ theme }) => theme.textColor};
        width:100%;
        height:100%;
        margin:1.5rem 0 0 0;
        padding-top:5rem;
    }
    a{
        color:${({ theme }) => theme.textColor};

    }
    
`;

export default Global;
