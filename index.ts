import { bodyStyle, sectionStyle } from './styles.css';

// Aplicar clase al body
document.body.classList.add(bodyStyle);

// Crear la sección y añadir a body
const section = document.createElement('section');
section.className = sectionStyle;

// Asignar variable CSS --bg para fondo de la imagen
section.style.setProperty('--bg', "url('assets/img-1.avif')");

// Crear dos enlaces <a> y añadirlos a la sección
const link1 = document.createElement('a');
link1.href = 'index7.html';

const link2 = document.createElement('a');
link2.href = 'index2.html';

section.appendChild(link1);
section.appendChild(link2);

// Añadir la sección al body
document.body.appendChild(section);

// Asignar variables CSS de colores al body (como en el style inline original)
document.body.style.setProperty('--clr', '#7422aa');
document.body.style.setProperty('--clr2', '#9b949b');
