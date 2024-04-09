function timeRequiredToBuy(tickets: number[], k: number): number {
    let sum = 0;

    let kTickets = tickets[k];
    for (let i = 0, n = tickets.length; i < n; i++) {
        if (tickets[i] < kTickets) sum += tickets[i]
        else sum += kTickets;
        if (i === k) kTickets--;
    }
    return sum;
};

console.log(timeRequiredToBuy([2,3,2], 0));
