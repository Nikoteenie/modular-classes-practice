import TvShow from "./TvShow.js";

export default class Cartoon extends TvShow {
  constructor(name, yearCreated, tvshowSeasons, theirSaying = true) {
    super(name, yearCreated, tvshowSeasons);
    this.theirSaying = theirSaying;
  }
  motto() {
    if (this.theirSaying) {
      this.theirSaying = false;
    } else {
      console.log("Woogity Woogity");
    }
  }
}
