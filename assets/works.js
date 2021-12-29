import linkGenerator from '../public/linkgenerator.png'
import linkGeneratorBanner from '../public/linkgenerator_banner.png'
import colinshifts from '../public/colinshifts.png'
import colinshiftsBanner from '../public/colinshifts_banner.png'
import justlist from '../public/justlist.png'
import justlistBanner from '../public/justlist_banner.png'
import wpp from '../public/wpp.png'
import wppBanner from '../public/wpp_banner.png'
import colinstudy from '../public/colinstudy.png'
import colinstudyBanner from '../public/colinstudy_banner.png'
import miHuerta from '../public/miHuerta.png'
import miHuertaBanner from '../public/miHuerta_banner.png'

export const works = [
    {
        mobile: true,
        url: 'mi_huerta',
        title: 'Mi Huerta',
        img: miHuerta,
        banner: miHuertaBanner,
        abstract: 'Aplicación que te ayudará a crear una huerta exitosa',
        description: 'Podrás crear tu huerta personalizada, con consejos sobre cada una de las plantas. A demás, cuenta con la opción de Huerta Inteligente, que te recomendará una huerta exitosa llena de buenas asociaciones.',
        live: 'https://play.google.com/store/apps/details?id=com.miHuerta.agustin.aguilera',
        technologies: [{
            name: 'React Native',
            color: '#E0D4F7'
        },
        {
            name: 'Redux',
            color: '#D6E1F8'
        },
        {
            name: 'Firebase',
            color: '#FCECCE'
        },
        {
            name: 'Typescript',
            color: '#D6E1F8'
        },
        ]
    },
    {
        url: 'link_generator',
        title: 'Link Generator',
        img: linkGenerator,
        banner: linkGeneratorBanner,
        abstract: '¿Buscas generar links de pago para usuarios finales? Échale un ojo a LinkGenerator',
        description: 'Aplicación para que un usuario final pueda pagar el precio en dolares declarado por el administrador, el cual podrá seleccionar los métodos de pagos deseados además del tiempo de duración de cada URL. - MercadoPago | Criptomonedas | Transferencia.',
        code: 'https://github.com/Aguilera-Agustin/-FRONT-LinkGenerator',
        live: 'https://youtu.be/AZh03iPuCvM',
        technologies: [{
            name: 'ReactJS',
            color: '#E0D4F7'
        },
        {
            name: 'Redux',
            color: '#D6E1F8'
        },
        {
            name: 'NodeJS',
            color: '#D0E6E1'
        },
        {
            name: 'Express',
            color: '#FCECCE'
        },
        {
            name: 'MySQL',
            color: '#F5D3E6'
        }]
    },
    {
        url: 'colin_shifts',
        title: 'ColinShifts',
        img: colinshifts,
        banner: colinshiftsBanner,
        abstract: 'Aplicación web encargada de gestión médicos de turnos a nivel administrativo.',
        description: 'Aplicación para que un usuario final pueda pagar el precio en dolares declarado por el administrador, el cual podrá seleccionar los métodos de pagos deseados además del tiempo de duración de cada URL. - MercadoPago | Criptomonedas | Transferencia.',
        code: 'https://github.com/Aguilera-Agustin/Colins-Shifts',
        live: 'https://colinshifts.netlify.app/',
        technologies: [{
            name: 'ReactJS',
            color: '#E0D4F7'
        },
        {
            name: 'Redux',
            color: '#D6E1F8'
        },
        {
            name: 'Firebase',
            color: '#FCECCE'
        },
        {
            name: 'MaterialUI',
            color: '#D0E6E1'
        }]
    },
    {
        url: 'just_list',
        title: 'Just List',
        img: justlist,
        banner: justlistBanner,
        abstract: 'Una aplicación orientada a la toma de notas rápidas, sin preocupaciones por el formato',
        description: 'JustList es la primer aplicación que construí utilizando el stack MERN, la cual se basa en la creación de notas rápidas, categorizadas y privadas. En JustList podrás crear notas sin preocuparte de formatos y precios. ',
        code: 'https://github.com/Aguilera-Agustin/JustList-FrontEnd',
        live: 'https://just-list.netlify.app/',
        technologies: [{
            name: 'ReactJS',
            color: '#E0D4F7'
        },
        {
            name: 'Redux',
            color: '#D6E1F8'
        },
        {
            name: 'NodeJS',
            color: '#D0E6E1'
        },
        {
            name: 'Express',
            color: '#FCECCE'
        },
        {
            name: 'MongoDB',
            color: '#F5D3E6'
        }]
    },
    {
        url: 'reminder',
        title: 'Reminder!',
        img: wpp,
        banner: wppBanner,
        abstract: '¿Necesitas un recordatorio ágil? Reminder: recordatorio utilizando whatsapp.',
        description: 'Bot de whatsapp hecho en una tarde, con el fin de poder crear recordatorios de una manera fácil y práctica. Este proyecto se hizo para entender y afianzar el conocimiento sobre cron-jobs y cron-expressions.',
        code: 'https://github.com/Aguilera-Agustin/Reminder',
        technologies: [{
            name: 'Node JS',
            color: '#D0E6E1'
        },
        {
            name: 'Firebase',
            color: '#FCECCE'
        }]
    },
    {
        url: 'colins-study',
        title: 'ColinStudy',
        img: colinstudy,
        banner: colinstudyBanner,
        abstract: 'Aplicación educativa para asignaturas de programación a nivel universitario',
        description: 'Sitio en construccion.',
        code: 'https://github.com/Aguilera-Agustin/ColinStudy',
        technologies: [{
            name: 'React JS',
            color: '#E0D4F7'
        }]
    }
]
