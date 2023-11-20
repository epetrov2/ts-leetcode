function garbageCollection(garbage: string[], travel: number[]): number {
  let mP = false;
  let mM = false;
  let mG = false;
  
  let i = travel.length;

  let sum = 0;
  while (i >= 0) {
    const s = garbage[i];
    if (!mP && s.includes('P')) mP = true;
    if (!mM && s.includes('M')) mM = true;
    if (!mG && s.includes('G')) mG = true;
    sum += s.length;

    i--;
    if (i < 0) break;
    if (mP) sum += travel[i];
    if (mM) sum += travel[i];
    if (mG) sum += travel[i];
  }
  return sum;
};

//console.log(garbageCollection(["G","P","GP","GG"], [2,4,3])); // 21
console.log(garbageCollection(["MMM","PGM","GP"], [3,10])); // 37
