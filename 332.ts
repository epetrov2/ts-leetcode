type QueueTickets = {
    current: number
    unused: Set<number>
    used: Array<number>
}

function findItinerary(tickets: string[][]): string[] {
    const n = tickets.length

    tickets.sort((a, b) => {
        if (a[0] === b[0]) return a[1] > b[1] ? 1 : -1
        else return a[0] > b[0] ? 1 : -1
    })
    for (let i = 0; i < n; i++) console.log(`${i} ${tickets[i]}`);

    let queue = new Array<QueueTickets>()
    let localQueue = new Array<QueueTickets>()
    let airport = ''
    let current = -1
    let unused = new Set<number>()
    let used = new Array<number>()
    for (let i = 0; i < n; i++) unused.add(i)

    airport = 'JFK'

    do {
        let i = tickets.findIndex(e => e[0] === airport)
        current = -1
        do {
            if (unused.has(i)) {
                if (current === -1) {
                    current = i
                }
                else {
                    localQueue.push({ current: i, unused: new Set(unused), used: Array.from(used) })
                }
            }
            i++
        } while (i !== tickets.length && tickets[i][0] === airport)

        while (localQueue.length > 0) {
            queue.push(localQueue.shift()!)
        }

        if (current === -1) {
            if (queue.length > 0) {
                const queueTickets = queue.pop()!
                current = queueTickets.current
                unused = queueTickets.unused
                used = queueTickets.used
                //console.log(`q ${airport} ${i} c: ${current}, un: ${Array(...unused)}, u: ${used}`);
            } else {
                console.log('ERROR: Itinerary not found');
                return []
            }
        }
        used.push(current)
        unused.delete(current)
        airport = tickets[current][1]
    } while (unused.size > 0)

    let res: string[] = ['JFK']
    for (const t of used) res.push(tickets[t][1])
    return res
}

console.log(findItinerary([["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]]));
