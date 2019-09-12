import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        color: ${({ theme }) => theme.font.color};
        background-color: ${({ theme }) => theme.colors.background};
        font-size: ${({ theme }) => theme.font.size}px;
        font-family: ${({ theme }) => theme.font.family}, Arial, sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var, input, textarea,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        color: ${({ theme }) => theme.font.color};
    }

    button {
        font-size: ${({ theme }) => theme.font.size * 1.2};
        color: ${({ theme }) => theme.colors.action};
        border: 2px solid ${({ theme }) => theme.colors.border};
        background-color: ${({ theme }) => theme.colors.background};
    }

    input {
        padding: 1px 3px;
        border: 2px solid ${({ theme }) => theme.colors.border};
        background-color: ${({ theme }) => theme.colors.input}
    }

    input:highlight {
        border: 2px solid ${({ theme }) => theme.colors.highlight};
    }
`;
