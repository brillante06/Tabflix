import { createGlobalStyle } from 'styled-components';
import { device } from './theme';

const Global = createGlobalStyle`

     *{
        font-family: 'Noto Sans KR','Bebas Neue', cursive, sans-serif;
        font-size: 100%;
        padding: 0;
        margin: 0;
        @media ${device.tablet}{
            font-size:80%;
        }
        @media ${device.mobile}{
            font-size:70%;
        }
    } 

    body{
        width:100%;
        height:100%;
        margin:1.5rem 0 0 0;
        padding-top:5rem;
    }    
`;

export default Global;
