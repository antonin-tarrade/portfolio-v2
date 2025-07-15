import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { slugify,capitalizeFirst } from '../src/utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(__dirname, '../src/data/projects.json');

function getProjectData(folderName,folderCategory,folderPath) {
  
  // Cover image URL
  const cover = fs.readdirSync(folderPath).find(f => /^cover\.(png|jpg|jpeg|webp)$/i.test(f));
  const coverPublicPath = path.join(folderPath,cover).split("public/")[1];

  // Additional images
  const imagesDir = path.join(folderPath, 'images');
  const images = fs.existsSync(imagesDir)
    ? fs.readdirSync(imagesDir).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .map(img => `/projects/${folder}/images/${img}`)
    : [];

  // Additional videos
  const videosDir = path.join(folderPath, 'videos');
  const videos = fs.existsSync(videosDir)
    ? fs.readdirSync(videosDir).filter(f => /\.(mp4|webm|mov)$/i.test(f))
      .map(video => `/projects/${folder}/videos/${video}`)
    : [];

  // Description
  const description = fs.existsSync(path.join(folderPath, 'description.txt'))
    ? fs.readFileSync(path.join(folderPath, 'description.txt'), 'utf8')
    : '';

  // Tags
  const tags = fs.existsSync(path.join(folderPath, 'tags.json'))
    ? JSON.parse(fs.readFileSync(path.join(folderPath, 'tags.json'), 'utf8'))
    : [];

  // Links
  const links = fs.existsSync(path.join(folderPath, 'links.json'))
    ? JSON.parse(fs.readFileSync(path.join(folderPath, 'links.json'), 'utf8'))
    : {};

  return {
    title: folderName.replace(/-/g, ' ').split(' ').map(word => capitalizeFirst(word)).join(' '),
    slug: slugify(folderName),
    cover: cover ? `${coverPublicPath}` : '',
    category: folderCategory,
    images,
    videos,
    description,
    tags,
    ...links
  };
}

function getProjectsFromCategory(category){
  // Get category path from folder
  const categoryPath = path.join(projectsDir,category);

  // Retrieves projects (folder list) from category
  const projects = fs.readdirSync(categoryPath).filter(f => fs.statSync(path.join(categoryPath, f)).isDirectory());

  // Return parsed projects into formated json
  return projects.map(p=>getProjectData(p,category,path.join(categoryPath,p)));
}

const categories = fs.readdirSync(projectsDir).filter(f => fs.statSync(path.join(projectsDir, f)).isDirectory());
const projects = categories.map(getProjectsFromCategory).flat().sort((p1,p2)=> p1.title.localeCompare(p2.title));

fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
console.log('Projects data generated!');