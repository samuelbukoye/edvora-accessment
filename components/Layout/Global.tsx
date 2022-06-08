import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #ffffff;
  --color-secondary:#cfcfcf;


  --bg-primary:#292929;
  --bg-secondary:#101010;
  --bg-tertiary:#171717;

  --font-primary:1.8rem;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  /* this defines what 1 rem is */
  font-size: 62.5%; /* 1rem = 10px; 10px/16px = 62.5% */
}

body {
  font-family: 'Inter', sans-serif;
}

body {
  background: var(--bg-primary);
  color: var(--color-primary);
  font-weight: 500;
  line-height: 1.21;
}

a {
  color: inherit;
  text-decoration: none;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
`;

export default GlobalStyle;
