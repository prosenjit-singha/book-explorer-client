import { css, Theme } from "@mui/material";

const getGlobalStyles = (theme: Theme) => {
  const isDark = theme.palette.mode === "dark";
  return css`
    :root {
      --bg-color: #171a23;
      color-scheme: ${isDark ? "dark" : "light"};
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Poppins", sans-serif;
      color: #fff;
      background: var(--bg-color);
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
    /* line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    } */
  `;
};

export default getGlobalStyles;
