function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
for (var m = 0; m<musicians.length; m++) {
  allMusicians.push(musicians[m] + " plays " + instruments[m]);
    }
  return allMusicians;
}


function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

