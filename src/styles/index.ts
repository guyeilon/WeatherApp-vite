import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Overpass', sans-serif;
    }
  html {
        height: 100%;
      }
  body {
         min-height: 100%;
        background-attachment: fixed;
        background: ${({ theme }) => theme.colors.background.body[theme.mode]};
      }
   input {
    all: unset;
    font-family: 'Overpass', sans-serif;
}
::placeholder {
    font-family: 'Overpass', sans-serif;
}
button {
    all: unset;
    font-family: inherit;
     user-select: none;


}
ul {
    list-style-type: none;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
img {
    width: 100%;
    display: block;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

  ::-webkit-scrollbar {
    width:  ${({ theme }) => theme.scrollbar.size.width};
    height:  ${({ theme }) => theme.scrollbar.size.height};
  
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.background};
  }
  ::-webkit-scrollbar-thumb {
     border-radius: ${({ theme }) => theme.scrollbar.borderRadius};
  }
`;

export default GlobalStyle;
