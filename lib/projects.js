import fs from 'fs';
import path from 'path';

export async function getAllProjects() {
  console.log("Getting all projects during build time")
  const projectsPath = path.join(process.cwd(), 'public', 'projects.json');
  const fileContents = fs.readFileSync(projectsPath, 'utf8');
  return JSON.parse(fileContents);
}