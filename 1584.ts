class UnionFind {
    private nodes: Map<number, number> = new Map()
    
    constructor(numVals: number) {
        for (let i = 0; i < numVals; i++) {
            this.nodes.set(i, i)
        }
        console.log(this.nodes);
        
    }

    union(nodeA: number, nodeB: number): boolean {
        const aParent = this.find(nodeA)
        const bParent = this.find(nodeB)
        
        console.log(`a: ${nodeA}, b: ${nodeB}, aP: ${aParent}, bP: ${bParent}`);
        
        if (aParent === bParent) {
            return false
        }
        
        this.nodes.set(aParent, bParent)
        console.log(this.nodes);
        return true
    }

    find(node: number): number {
        if (this.nodes.get(node) === node) {
            return node
        }
        
        return this.find(this.nodes.get(node)!)
    }
}

function minCostConnectPoints(points: [number, number][]): number {
    const edges: { from: number, to: number, cost: number }[] = []
    
    for (let from = 0; from < points.length; from++) {
        for (let to = from; to < points.length; to++) {
            edges.push({
                from,
                to,
                cost: Math.abs(points[from][0] - points[to][0]) + 
                        Math.abs(points[from][1] - points[to][1])
            })
        } 
    }
    
    edges.sort((a, b) => a.cost - b.cost)

    console.log(edges);

    let totalCost = 0
    let unionFind = new UnionFind(points.length)
    
    for (const { from, to, cost } of edges) {
        //try to union; if it passes, add it's cost!
        if (unionFind.union(from, to)) {
            totalCost += cost
        }
    }

    return totalCost
};

console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]));
