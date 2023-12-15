function destCity(paths: string[][]): string {
    let set = new Set<string>();
    for (const pair of paths) {
        set.add(pair[0]);
    }
    for (const pair of paths) {
        if (!set.has(pair[1])) return pair[1];
    }
    return '';
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
