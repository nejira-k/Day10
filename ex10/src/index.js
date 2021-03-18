function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Black Sabbath",
      title: "War Pigs",
      release_year: 1970,
      id: 2,
      formats: {
        1: "EP",
        2: "Vinyl",
        3: "Video",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
