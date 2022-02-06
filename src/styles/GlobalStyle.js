import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { mediaQuery, fontFamily, color } from './Variable';
import { hidden } from './Mixin';

const { mediaTablet, mediaMobile } = mediaQuery;
const { system, appleSystem, notoSans } = fontFamily;
const { midnight700 } = color;

function transDelay(length, duration) {
	let styles = '';
  
	for (let i = 1; i < length; i++) {
	   	styles += `
			.trans-delay${i} {
				transition-delay: ${(duration * i).toFixed(1)}s;
			}
	   `
	}
  
	return css`${styles}`;
}
  
const GlobalStyle = createGlobalStyle`
	${reset}
	${transDelay(5, 0.3)};
	
	* {
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-size: 16px;
		font-family: ${appleSystem}, ${notoSans}, ${system};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;		
		font-weight: 400;
		line-height: 1.6;
		letter-spacing: -0.03em;
		color: ${midnight700};
		word-break: keep-all;
	}

	article, section, div, figure {
		position: relative;
	}

	figure {
		margin: 0;
	}

	button {
		background: transparent;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		font-style: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		color: inherit;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	}

	a {
		text-decoration: none;

		&, &:active, &:visited {
			color: #000;
		}
	}

	strong, b {
		font-weight: 700;
	}
	
	img {
		max-width: 100%;
		display: block;
	}

	.hidden {
		${hidden};
	}

	br.none-desktop {
		display: none;
	}

	${mediaTablet} {
		br.none-desktop {
			display: block;
		}

		br.none-tablet {
			display: none;
		}
	}

	${mediaMobile} {
		body {
			letter-spacing: -0.02em;
		}

		br.none-desktop {
			display: block;
		}

		br.none-mobile {
			display: none;
		}
	}
`;

export default GlobalStyle;