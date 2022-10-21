import { css } from '@linaria/core'
import breakpoints from './breakpoints'

export const globalStyles = css`
  :global() {
    *,
    :after,
    :before,
    html {
      box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg-color: #262626;
        --nav-bar-focus-bg-color: #564e4e;
        --text-primary: #fff;
        --text-secondary: #cdcdcd;
        --audio-bg-color: var(--text-secondary);
      }

      body {
        background-color: var(--bg-color);
      }
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg-color: #fff;
        --nav-bar-focus-bg-color: #eee;
        --text-primary: #1b1b1b;
        --text-secondary: #4e4e4e;
        --audio-bg-color: #868686;
      }
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Apple Color Emoji', 'SF Pro', 'SF Pro Icons',
        'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      font-size: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    h3 {
      color: var(--text-primary);
    }

    :root {
      /* Common */
      --nav-bar-width: 150px;
      --border-radius: 5px;

      /* View On GitHub */
      --octo-color: var(--text-primary);
      --octo-fill: #42b983;

      /* Menu on mobile devices */
      --menu-icon-bg-color: var(--octo-fill);
    }

    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 auto;
    }

    #__next {
      width: 90%;
      margin: 3% auto 0 auto;
    }

    /* Small Devices */
    @media (max-width: ${breakpoints.md}) {
      :root {
        --nav-bar-width: 0px;
      }
    }

    /* Big than small devices */
    @media (min-width: ${breakpoints.md}) {
      #__next {
        width: 90%;
        margin: 5% auto 0 auto;
      }

      .content {
        width: 70%;
        transform: translateX(calc(var(--nav-bar-width) / 2));
      }
    }

    /* Tablet, iPad, etc */
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      .content {
        margin-left: calc(var(--nav-bar-width) * 1.2);
      }
    }

    /* PC, MacBook, etc */
    @media (min-width: ${breakpoints.lg}) {
      #__next {
        margin: 2% auto 0 auto;
        width: 80%;
      }
    }
  }
`
