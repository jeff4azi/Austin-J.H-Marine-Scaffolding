/* import images */
import project1 from "./assets/images/bottom-view-skyscraper-scaffolding.jpg"
import project2 from "./assets/images/skyscraper-scaffolding.jpg"
/* import project3 from "./assets/images/bottom-view-skyscraper-scaffolding.jpg"
import project4 from "./assets/images/bottom-view-skyscraper-scaffolding.jpg"
import project5 from "./assets/images/bottom-view-skyscraper-scaffolding.jpg"
import project6 from "./assets/images/bottom-view-skyscraper-scaffolding.jpg"
  */
import client_1 from "./assets/images/client-1.webp"
import client_2 from "./assets/images/client-2.webp"
import client_3 from "./assets/images/client-3.jpg"

export const projects = [
  {
    id: 1,
    title: "Tower",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project1,
  },
  {
    id: 2,
    title: "Sky Scraper",
    description:
      "A really beautiful sky scraper designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project2,
  },
  {
    id: 3,
    title: "Tower",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe bla bla",
    mediaType: "image",
    mediaSrc: project1,
  },
  {
    id: 4,
    title: "Sky Scraper",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project2,
  },
  {
    id: 5,
    title: "Tower",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project1,
  },
  {
    id: 6,
    title: "Sky Scraper",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project2,
  },
  {
    id: 7,
    title: "Tower",
    description:
      "A very so much undeniable really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project1,
  },
  {
    id: 8,
    title: "Sky Scraper",
    description:
      "A really beautiful tower designed by our best architect Leonardo da Vinci hehehe",
    mediaType: "image",
    mediaSrc: project2,
  },
];

export const sections = ['home', 'services', 'projects', 'about', 'testimonials', 'quote']

export const services = [
  {
    id: 1,
    title: "Design & Planning",
    description: "Comprehensive scaffolding design and site planning to ensure safety, efficiency, and compliance with project requirements.",
    path: "M232,56H72V40a8,8,0,0,0-8-8H48A32,32,0,0,0,16,64V176a32,32,0,0,0,32,32H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM32,64A16,16,0,0,1,48,48h8v96H48a31.82,31.82,0,0,0-16,4.29ZM224,192H48a16,16,0,0,1,0-32H64a8,8,0,0,0,8-8V72H224ZM104,136a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16H176V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16Zm32-16h24v16H136Z",
    color: "light",
  },
  {
    id: 2,
    title: "Installation & Removal",
    description: "Safe and professional scaffolding installation and dismantling services carried out by certified experts.",
    path:"M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z",
    color: "dark",
  },
  {
    id: 3,
    title: "Inspection & Maintenance",
    description: "Regular inspections and ongoing maintenance to guarantee scaffolding remains secure and fully functional throughout your project.",
    path: "M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z",
    color: "accent",
  },
];

export const about_details = [
  {id: 1, number: 400, symbol: '+', details: "Successful projects"},
  {id: 2, number: 20, symbol: '+', details: "Years of experience"},
  {id: 3, number: 90, symbol: '+', details: "Happy clients"},
  {id: 4, number: 100, symbol: '%', details: "Client satisfaction"},
]

export const testimonials = [
  {
    id: 1,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_1,
    position: "Customer",
    bg_color: '#00AD5D',
    text_color: '#111812',
    name: "John Doe",
  },
  {
    id: 2,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_2,
    position: "Customer",
    bg_color: '#fbfff4',
    text_color: '#111812',
    name: "Christina Lee",
  },
  {
    id: 3,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_3,
    position: "Director",
    bg_color: '#111812',
    text_color: '#fbfff4',
    name: "Samantha Smith",
  },
  {
    id: 1,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_1,
    position: "Customer",
    bg_color: '#00AD5D',
    text_color: '#111812',
    name: "John Doe",
  },
  {
    id: 2,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_2,
    position: "Customer",
    bg_color: '#fbfff4',
    text_color: '#111812',
    name: "Christina Lee",
  },
  {
    id: 3,
    text: "Austin J.H Technical Support Services Ltd provided exceptional scaffolding services for our recent construction project. Their team was professional, efficient, and ensured that all safety standards were met. We highly recommend their services to anyone in need of reliable scaffolding solutions.",
    img: client_3,
    position: "Director",
    bg_color: '#111812',
    text_color: '#fbfff4',
    name: "Samantha Smith",
  },
]

export const social_icons = [
  "M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z",
  "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z",
  "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
]