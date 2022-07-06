import KartImage from "../assets/kart-day.jpeg";
import MeninosBike from "../assets/meninos-bike.jpeg";
import MeninosNatal from "../assets/meninos-natal.jpeg";
import Owen from "../assets/owen.jpeg";
import Taylor from "../assets/taylor-1.jpeg";

export const images = [
  {
    id: 1,
    title: "Primeiro dia de Kart",
    //url: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    url: `${KartImage}`,
    active: true,
  },
  {
    id: 2,
    title: "Crescendo sendo crianças",
    //url: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    url: `${MeninosBike}`,
    active: false,
  },
  {
    id: 3,
    title: "Dividindo Momentos",
    //url: "https://images.unsplash.com/photo-1614113072653-5b6f26e1bbc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    url: `${MeninosNatal}`,
    active: false,
  },
  {
    id: 4,
    title: "Owen",
    //url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    url: `${Owen}`,
    active: false,
  },
  {
    id: 5,
    title: "Taylor",
    //url: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkcyUyMHBsYXlpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    url: `${Taylor}`,
    active: false,
  },
];
