import type { Project } from "../data";
import arcibo from "./arcibo";
import mahezza from "./mahezza";
import amazonDataPipeline from "./amazon-data-pipeline";
import tokoManagement from "./toko-management";
import paragraph from "./paragraph";
import masjidhub from "./masjidhub";
import nontonkilat from "./nontonkilat";

export const PROJECTS: Project[] = [
  nontonkilat,
  masjidhub,
  arcibo,
  mahezza,
  amazonDataPipeline,
  tokoManagement,
  paragraph,
];
