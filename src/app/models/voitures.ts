export class Voiture {
  id: number;
  marque: string;
  model: string;
  img: string;
  kmtrage: number;
  annee: number;
  constructor(
    id: number = null,
    marque: string = null,
    model: string = null,
    img: string,
    kmtrage: number = null,
    annee: number = null
  ) {
    this.id = id;
    this.marque = marque;
    this.model = model;
    this.img = img;
    this.kmtrage = kmtrage;
    this.annee = annee;
  }
}
