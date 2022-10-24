import TvShow from "./TvShow.js";

export default class LiveAction extends TvShow {
  constructor(name, yearCreated, tvshowSeasons, numOfMainCharacters) {
    super(name, yearCreated, tvshowSeasons);
    this.numOfCharacters = numOfMainCharacters;
  }

  mood() {
    if (this.numOfMainCharacters === 3) {
      console.log("Sabrina and her two Aunts");
    } else {
      console.log("Must be a different show.");
    }
  }
}
