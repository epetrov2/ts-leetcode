class MyStack {
    _a: number[] = []
    constructor() {

    }

    push(x: number): void {
        this._a.push(x)
    }

    pop(): number {
        return this._a.pop()!
    }

    top(): number {
        return this._a[this._a.length-1]
    }

    empty(): boolean {
        return this._a.length === 0
    }
}