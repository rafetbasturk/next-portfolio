import "server-only";
import { default as en } from "@/dictionaries/en.json";
import { default as tr } from "@/dictionaries/tr.json";
import { Dictionary, Locale } from "../lib/definitions";
import odinbook from "@/public/images/odinbook.png";
import battleship from "@/public/images/battleship.png";
import world from "@/public/images/where_in_the_world.png";
import todo from "@/public/images/todo_app.png";
import shopping from "@/public/images/shopping_cart.png";
import waldo from "@/public/images/where_is_waldo.png";
import jobify from "@/public/images/jobify.png";
import crowdfunding from "@/public/images/crowdfunding.png";

const images = [
  odinbook,
  waldo,
  shopping,
  battleship,
  world,
  todo,
  jobify,
  crowdfunding,
];

type EntryProjects = Omit<Dictionary["projects"][number], "imageUrl">;

const setStaticImages = (projects: EntryProjects[]) => {
  return projects.map((project, i) => ({
    ...project,
    imageUrl: images[i],
  }));
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => {
    const projects = setStaticImages(en.projects);

    return { ...en, projects } as Dictionary;
  },
  tr: async () => {
    const projects = setStaticImages(tr.projects);

    return { ...tr, projects } as Dictionary;
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
