function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
for (var m = 0; m<musicians.length; m++) {
  allMusicians.push(musicians[m] + " plays " + instruments[m]);
    }
  return allMusicians;
}


function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var excitingFacts = [];
  var f = 0;
  while (f<facts.length) {
    excitingFacts.push(`${facts[f]}!!!`);
    f++;
  }
}

