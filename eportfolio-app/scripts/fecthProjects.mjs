import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { slugify,capitalizeFirst } from '../src/utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Use public/projects for assets, and generate URLs starting with /projects/...
const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(__dirname, '../src/data/projects.json');

function getProjectData(folder) {
  const dir = path.join(projectsDir, folder);

  // Cover image URL
  const cover = fs.readdirSync(dir).find(f => /^cover\.(png|jpg|jpeg|webp)$/i.test(f));

  // Additional images
  const imagesDir = path.join(dir, 'images');
  const images = fs.existsSync(imagesDir)
    ? fs.readdirSync(imagesDir).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
      .map(img => `/projects/${folder}/images/${img}`)
    : [];

  // Additional videos
  const videosDir = path.join(dir, 'videos');
  const videos = fs.existsSync(videosDir)
    ? fs.readdirSync(videosDir).filter(f => /\.(mp4|webm|mov)$/i.test(f))
      .map(video => `/projects/${folder}/videos/${video}`)
    : [];

  // Description
  const description = fs.existsSync(path.join(dir, 'description.txt'))
    ? fs.readFileSync(path.join(dir, 'description.txt'), 'utf8')
    : '';

  // Tags
  const tags = fs.existsSync(path.join(dir, 'tags.json'))
    ? JSON.parse(fs.readFileSync(path.join(dir, 'tags.json'), 'utf8'))
    : [];

  // Links
  const links = fs.existsSync(path.join(dir, 'links.json'))
    ? JSON.parse(fs.readFileSync(path.join(dir, 'links.json'), 'utf8'))
    : {};

  return {
    title: folder.replace(/-/g, ' ').split(' ').map(word => capitalizeFirst(word)).join(' '),
    slug: slugify(folder),
    cover: cover ? `/projects/${folder}/${cover}` : '',
    images,
    videos,
    description,
    tags,
    ...links
  };
}

const folders = fs.readdirSync(projectsDir).filter(f => fs.statSync(path.join(projectsDir, f)).isDirectory());
const projects = folders.map(getProjectData);

fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));
console.log('Projects data generated!');