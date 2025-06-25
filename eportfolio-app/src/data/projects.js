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
        title : "Rapport TAV",
        video: null,
        img: "TAV.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"matlab.png", name:"Matlab" },
            { icon:"react.png", name:"React" },
            { icon:"python.png", name:"Python" },
            { icon:"js.png", name:"JavaScript" },
            { icon:"flask.png", name:"Flask" }

        ],
        github:"https://github.com/antonin-tarrade/Project-TAV",
        link:""
    },
    {
        title : "School Portfolio",
        video: null,
        img: "eportfolio.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"svelte.png", name:"Svelte" },
            { icon:"js.png", name:"JavaScript" }
        ],
        github:"https://github.com/antonin-tarrade/antonin-tarrade.github.io",
        link:""
    },
    {
        title : "YouLearn",
        video: null,
        img: "YouLearn.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum erat, at cursus enim urna eu erat.",
        tags : [
            { icon:"react.png", name:"React" },
            { icon:"js.png", name:"JavaScript" },
            { icon:"python.png", name:"Python" },
            { icon:"jboss.png", name:"JBoss" }

        ],
        github:"https://github.com/antonin-tarrade/YouLearn",
        link:""
    }
];

// Gennerate a slug to be used as an url id
const projects = rawProjects.map(project => ({
  ...project,
  slug: slugify(project.title)
}));


export default projects;