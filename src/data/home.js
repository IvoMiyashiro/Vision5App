import slideImg_1 from '../assets/images/slides/slide-1.jpeg';
import slideImg_2 from '../assets/images/slides/slide-2.jpeg';
import slideImg_3 from '../assets/images/slides/slide-3.jpeg';
import blogCardImg_1 from '../assets/images/blog/Blog_img_1.jpg';
import blogCardImg_2 from '../assets/images/blog/Blog_img_2.jpg';
import blogCardImg_3 from '../assets/images/blog/Blog_img_3.jpg';

import {
    faHandshake,
    faCubes,
    faMobileAlt,
    faShieldAlt,
    faLightbulb,
    faLeaf,
} from '@fortawesome/free-solid-svg-icons';


export const carouselData = [{
    link: '/services',
    img: slideImg_1,
    title: 'Somos Mayoristas',
    text: 'Distribuidor de productos tecnológicos para Latinoamérica, especializado en celulares usados premium.',
    btnText: 'Consultar',
},{
    link: '/services/our-process',
    img: slideImg_2,
    title: 'Aquí ocurre la magia.',
    text: 'En nuestro laboratorio los especialistas realizan un riguroso control de calidad a cada equipo que ofrecemos.',
    btnText: 'Consultar',
},{
    link: '/services/distributors',
    img: slideImg_3,
    title: '¿Interesado en distribuir nuestros productos?',
    text: 'Te enseñamos a emprender y desarrollar tu propio negocio. Tenemos toda la información y herramientas necesarias.',
    btnText: 'Consultar',
},]

export const largeCardData = [{
    title: 'Qué Hacemos?',
    text: 'Somos distribuidores mayoristas para Latinoamérica de productos tecnológicos, especializados en celulares y notebooks nuevos y reacondicionados, accesorios y productos de audio.',
    link: '/about'
},{
    title: 'Nuestro Proceso',
    text: 'Contamos con tecnología de punta y, a través de nuestro proceso de diagnóstico y control de calidad, distribuimos dispositivos móviles de la más alta calidad.',
    link: '/services/our-process'
},{
    title: 'Productos',
    text: 'Ofrecemos productos, servicios y asesorías para acompañar a nuestros clientes y distribuidores en el desarrollo de su negocio, garantizándoles un stock constante de alta calidad.',
    link: '/services/products'
}];

export const smallCardData = {
    text: 'Ofrecemos precios competitivos y tiempos óptimos de respuesta y envío, que nos permiten ayudarte a minimizar tus costos y maximizar tus ganancias.',
    link: '/services'
}

export const aboutData = {
    title: 'Ayudar a nuestros clientes es nuestra prioridad.',
    text: 'En Vision 5 Electronics contamos con más de 10 años de experiencia dentro del mercado latinoamericano de productos electrónicos. Nuestro negocio ha logrado una base sólida en el mercado mayorista de tecnologías móviles y apuesta por las relaciones estratégicas con emprendedores y mayoristas como modelo de negocio.',
    list: [{
        text: 'Equipos rigurosamente probados y clasificados.'
    },{
        text: 'Amplia gama de modelos de smartphones nuevos.'
    },{
        text: 'Dispositivos completamente funcionales y disponibles en todos los grados.'
    }]
}

export const servicesData = {
    title: '¿Buscas una alianza estratégica? ¡Estamos listos para ayudarte!'
}

export const hoverCardData = [{
    background: 'firstCardImg',
    icon: faHandshake,
    title: 'Alianza Estratégica',
    text: 'Nuestro principal objetivo es ayudar a nuestros asociados a maximizar sus ganancias y llevar su negocio al próximo nivel.',
},{
    background: 'secondCardImg',
    icon: faCubes,
    title: 'Fabricantes',
    text: 'Con nuestra ayuda, los fabricantes de celulares y otros dispositivos móviles encuentran una solución para redistribuir los equipos que se encuentren en el final de su vida útil',
},{
    background: 'thirdCardImg',
    icon: faMobileAlt,
    title: 'Operadoras Telefónicas',
    text: 'Te ayudaremos a desarrollar una estrategia para recuperar el valor máximo de los equipos no vendidos, devueltos, o de poca demanda, para minimizar las pérdidas y reducir excesos dentro de tu inventario',
},{
    background: 'fourthCardImg',
    icon: faShieldAlt,
    title: 'Garantía y Respaldo',
    text: 'Nuestro proceso de diagnóstico garantiza la eliminación de información de forma efectiva, con la finalidad de restaurar los dispositivos a su configuración inicial o de fábrica.',
},{
    background: 'fifthCardImg',
    icon: faLightbulb,
    title: 'Entes Gubernamentales',
    text: 'Ofrecemos soluciones ideales para actualizar y mejorar los celulares, y dispositivos móviles de tus equipos de trabajo, minimizando costos y generando valor .',
},{
    background: 'sixthCardImg',
    icon: faLeaf,
    title: 'Sustentabilidad',
    text: 'Nos aseguramos de que miles de celulares usados sean reutilizados en vez de desechados, extendiendo su vida útil por medio del reacondicionamiento y optimización.',
}];

export const reviewCardsData = [{
    review: 'El producto llego en buen estado, mucho antes de la fecha estimada, feliz con mi compra',
    name: 'John'
},
{
    review: 'Excelente, dentro del tiempo de entrega.',
    name: 'Jorge'
},
{
    review: 'Superó mis expectativas',
    name: 'Pablo'
}]

export const blogCardsData = [{
    date: 'Agosto 7, 2021',
    title: 'Dónde comprar celulares usados para la venta.',
    text: 'La respuesta a esta incógnita puede parecerte sencilla porque, normalmente, comprar celulares usados a la venta es un tema común y las personas adquieren su equipo móvil según sus gustos y el presupuesto que tienen disponible.',
    img: blogCardImg_1,
},{
    date: 'Agosto 7, 2021',
    title: 'Cómo conseguir un proveedor de celulares.',
    text: 'Antes de iniciar un negocio, cualquiera que sea, una de las primeras interrogantes que debes plantearte es cómo conseguir un proveedor.',
    img: blogCardImg_2
},{
    date: 'Agosto 7, 2021',
    title: 'Negocio fácil de emprender: Teléfonos celulares usados.',
    text: 'Existen muchos negocios fáciles de emprender, para todos los gustos, ajustados al tiempo de la persona y hasta con muchas o pocas ganancias.',
    img: blogCardImg_3
},]