import type { Wand } from "./wand";

export interface Character {
  //card
  name: string;
  house: string;
  image: string;

  //modal
  gender: string;
  species: string;
  dateOfBirth: string;
  ancestry: string;
  patronus: string;
  wand: Wand;
}