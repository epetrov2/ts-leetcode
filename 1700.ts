function countStudents(students: number[], sandwiches: number[]): number {
    let pref: [number, number] = [0, 0];
    pref[0] = students.filter(a => a === 0).length;
    pref[1] = students.length - pref[0];

    let sandwich = sandwiches.shift()!;
    while (students.length) {
        const student = students.shift()!;
        if (student === sandwich) {
            pref[student]--;
            sandwich = sandwiches.shift()!;
        } else if (pref[sandwich] === 0) break
        else students.push(student);

    }

    return pref[0] + pref[1];
};

console.log(countStudents([1,1,0,0], [0,1,0,1]));
//console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));