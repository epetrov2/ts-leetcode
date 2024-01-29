class MyQueue {
    array = Array<number>();
    reverse = Array<number>();
    constructor() {

    }

    push(x: number): void {
        this.array.push(x);
    }

    pop(): number {
        if (!this.reverse.length) {
            while (this.array.length) {
                this.reverse.push(this.array.pop()!);
            }
        }
        return this.reverse.pop()!;
    }

    peek(): number {
        if (this.reverse.length) {
            return this.reverse[this.reverse.length-1];
        } else return this.array[0];
    }

    empty(): boolean {
        return (this.array.length + this.reverse.length > 0);
    }
}


var obj = new MyQueue()
console.log(obj.push(1));
console.log(obj.push(2));
console.log(`1- ` + obj.peek());
console.log(obj.push(3));
console.log(obj.push(4));
console.log(`1- ` + obj.pop());
console.log(`2- ` + obj.pop());
console.log(`3- ` + obj.pop());
console.log(obj.empty());
