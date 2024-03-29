import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FE864;
    --negative: #E83F5B;
    --white: #FFFFFF; 

  --title-1: 1.125rem;
  --title-2: calc(var(--title-1) - 0.125);
  --title-3: calc(var(--title-2) - 0.125);
  --headline: calc(var(--title-3) - 0.125);
}

body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

button {
    cursor: pointer;
  }
  
a {
    text-decoration: none;
  }


`;
