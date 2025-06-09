import { style, globalStyle, keyframes } from '@vanilla-extract/css';

// Reset global y font-family
globalStyle(`*, *::before, *::after`, {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: `sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue'`,
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
  scrollbarWidth: 'thin',
});

export const bodyStyle = style({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  placeContent: 'center',
  backgroundImage: 'linear-gradient(to bottom, var(--clr), var(--clr2))',
  overflow: 'hidden',
  transformStyle: 'preserve-3d',
  perspective: '10001px',
});

// Animación fadeIn para view-transition
export const fadeIn = keyframes({
  '0%': {
    transformOrigin: '50% 100%',
    transform: 'perspective(10000px) rotateX(90deg)',
  },
  '100%': {
    transformOrigin: '50% 100%',
    transform: 'perspective(10000px) rotateX(0deg)',
  },
});

// Estilo para la sección
export const sectionStyle = style({
  backgroundImage: 'var(--bg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  width: '100%',
  height: '100%',
  inset: 0,
  display: 'flex',
  // view-transition-name no soportado en vanilla-extract, poner en CSS global si es necesario
  selectors: {
    // Pseudo-elementos ::before y ::after
    '&::before, &::after': {
      content: '""',
      display: 'block',
      width: '6vmax',
      height: '5.5vmax',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      backgroundImage: `url('assets/arrow.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply',
    },
    '&::before': {
      left: '2vmax',
      transform: 'translateY(-50%) scaleX(-1)',
    },
    '&::after': {
      right: '2vmax',
    },
    // Estilo para los <a> hijos
    'a': {
      width: '50%',
      height: '100%',
      display: 'block',
      backgroundColor: 'transparent',
    },
  },
});

// Animaciones para ::view-transition-new(section) y ::view-transition-old(section) — usar CSS global
globalStyle('::view-transition-new(section)', {
  animation: `${fadeIn} 1s ease forwards`,
});
globalStyle('::view-transition-old(section)', {
  animation: `${fadeIn} 1s ease reverse forwards`,
});
