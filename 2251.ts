function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
    const FCOUNT = flowers.length;
    const HCOUNT = people.length;
    let inc: number[] = Array<number>(FCOUNT);
    let dec: number[] = Array<number>(FCOUNT);

    for (let i = 0; i < FCOUNT; i++) {
        inc[i] = flowers[i][0];
        dec[i] = flowers[i][1];
    }
    inc.sort((a, b) => a - b);
    dec.sort((a, b) => a - b);

    type Human = {
        id: number
        time: number
        answer: number
    }

    let humans = Array<Human>(HCOUNT);

    for (let i = 0; i < HCOUNT; i++)
        humans[i] = ({ id: i, time: people[i], answer: 0 });//.push
    humans.sort((a, b) => a.time - b.time);

    let incId = 0;
    let decId = 0;
    let humansId = 0;
    let flowersCurrent = 0;

    while (humansId < HCOUNT) {
        console.log(humans[humansId]);

        while ((incId < FCOUNT) && (inc[incId] <= humans[humansId].time)) {
            flowersCurrent++;
            console.log('i ' + incId + ': ' + inc[incId] + ', ' + flowersCurrent);

            incId++;
        }
        while ((decId < FCOUNT) && (dec[decId] < humans[humansId].time)) {
            flowersCurrent--;
            console.log('d ' + decId + ': ' + dec[decId] + ', ' + flowersCurrent);
            decId++;
        }
        humans[humansId].answer = flowersCurrent;
        humansId++
    }


    humans.sort((a, b) => a.id - b.id)
    for (let i = 0; i < HCOUNT; i++) people[i] = humans[i].answer;

    return people
};

console.log(fullBloomFlowers([[1, 6], [3, 7], [9, 12], [4, 13]], [2, 3, 7, 11]));
