import TvShow from "./TvShow.js";
import Cartoon from "./Cartoon.js";
import LiveAction from './LiveAction.js'

let show = new TvShow("Totally Spies", 2001, 6);
let rocket = new Cartoon("Rocket Power", 1999, 4, true);
let witch = new LiveAction("Sabrina the teenage witch", 1996, 7, 3);

// logs each instance
console.log(show);
console.log(rocket);
console.log(witch);

//log the objects after calling .tvShowSeasons() to verify it worked as intended
show.tvShowSeasons();
rocket.tvShowSeasons();
witch.tvShowSeasons();

//log the objects after calling .tvShowSeasons() to verify it worked as intended
console.log(show);
console.log(rocket);
console.log(witch);


