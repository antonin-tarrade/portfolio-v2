import { slugify } from "../utils";


const rawProjects = [
    {
        title : "Space Travelers",
        video: null,
        img: "SpaceTravelers.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"Unity.png", name:"Unity" },
            { icon:"cs.png", name:"C#" }
        ],
        github:"https://github.com/antonin-tarrade/Project-ChristmasTravelers",
        link:""
    },
    {
        title : "Penguin Survivors",
        video: null,
        img: "PenguinSurvivors.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"Unity.png", name:"Unity" },
            { icon:"cs.png", name:"C#" }
        ],
        github:"https://github.com/antonin-tarrade/ProjectPenguin",
        link:""
    },
    {
        title : "SausageSerenity",
        video: null,
        img: "SausageSerenity.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"godot.png", name:"Godot" },
        ],
        github:"https://github.com/antonin-tarrade/SausageSerenity",
        link:"https://lighar.itch.io/sausageserenity"
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