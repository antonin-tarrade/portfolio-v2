import { slugify } from "../utils";


const rawProjects = [
    {
        title : "Project1",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:"https://antonin-tarrade.dev"
    },
    {
        title : "Project2",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    },
    {
        title : "Project3",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    },
    {
        title : "Project4",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    },
    {
        title : "Project5",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    },
    {
        title : "Project6",
        video: null,
        img: "logo512.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"logo192.png", name:"tag1" },
            { icon:"logo192.png", name:"tag2" }
        ],
        github:"https://github.com/antonin-tarrade",
        link:""
    }
];

// Gennerate a slug to be used as an url id
const projects = rawProjects.map(project => ({
  ...project,
  slug: slugify(project.title)
}));


export default projects;