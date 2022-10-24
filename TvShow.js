export default class TvShow {
  constructor(name, yearCreated, tvshowSeasons) {
    this.name = name;
    this.yearCreated = yearCreated;
    this.tvshowSeasons = tvshowSeasons;
  }

  tvShowSeasons() {
    this.tvshowSeasons++;
  }
}
