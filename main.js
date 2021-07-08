window.addEventListener('load',()=>{
    const imagenes = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png'];

    let i = 1;
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const progressBar = document.querySelector('#progress-bar');
    const indicadores = document.querySelector('#indicadores');
    let porcentaje_base = 100/imagenes.length;/* 100% del ancho dividido la cant de img */
    let porcentaje_actual = porcentaje_base;

    for (let index = 0; index < imagenes.length; index++) {/* por cada img creamos un div y a cada uno le asignamos la class circle y un identificador id */
        const div = document.createElement('div');
        div.classList.add('circles');
        div.id = index;
        indicadores.appendChild(div);/* agregamos a la #indicadores los div creados */
    }

    progressBar.style.width = `${porcentaje_base}%`;/* el ancho de la progressBar cera igual al porcentaje base de la cantidad de img que existan */
    img1.src = imagenes[0];/* imagen que se mostrara primero */
    const circulos = document.querySelectorAll('.circles');
    circulos[0].classList.add('resaltado');

    const slideshow = () => {
        img2.src = imagenes[i];
        const circulo_actual = Array.from(circulos).find(element => element.id == i);/* del array de circulos que me traiga los elementos donde el id de cada elemento sea igual a la var i */
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));/* removemos la clase resaltado de todos los elementos */
        circulo_actual.classList.add('resaltado'); /* agregamos al circulo actual la clase resaltado */

        img2.classList.add('active');/* lo posicionara en left cero para que podamos verlo en el window */
        i++;/* incrementamos la var i */
        porcentaje_actual+=porcentaje_base;
        progressBar.style.width = `${porcentaje_actual}%`;

        if(i == imagenes.length){/* si la var i es igual al ultimo elemeento de nuestro array */
            i = 0;/* reseteamos los valores siguientes */
            porcentaje_actual = porcentaje_base - porcentaje_base;
        }

        setTimeout(() => {
            img1.src = img2.src;
            img2.classList.remove('active');
        }, 1000);

    }

    setInterval(slideshow, 4000);/* ejecutamos la funcion SLIDESHOW cada 4000 milisegundos*/
})