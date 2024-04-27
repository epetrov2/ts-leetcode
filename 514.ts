function findRotateSteps(ring: string, key: string): number {
    const ringL = ring.length;
    const keyL = key.length;
    

    const aRing: Array<[string, number]> = Array.from(ring).map((value: string, index: number) => [value, index]);
    let dp = new Map<string, Array<[number, number]>>();
    let prevLetters: Array<[number, number]> = [[0,0]];
    let prevLetter = '';
    for (const letter of key) {
        if (letter !== prevLetter) {
            let letters = dp.get(letter);
            if (letters === undefined) {
                letters = aRing.filter(([curLetter, curId]) => curLetter === letter).map(pair => [pair[1], 0]);
                dp.set(letter, letters);
            }
            for (let j = 0; j < letters.length; j++) {
                let minSteps = Number.MAX_SAFE_INTEGER;
                for (const [prevId, prevSteps] of prevLetters) {
                    let steps = Math.abs(letters[j][0] - prevId);
                    steps = Math.min(steps, ringL - steps);
                    minSteps = Math.min(steps + prevSteps, minSteps);
                }
                letters[j][1] = minSteps;
            }
            prevLetter = letter;
            prevLetters = letters;
        }

    }
    console.log(dp);

    return Math.min(...prevLetters.map(([id, steps]) => steps)) + keyL;
};

console.log(findRotateSteps('godding', 'gnido'));
