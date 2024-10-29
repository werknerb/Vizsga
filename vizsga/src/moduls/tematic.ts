export class Tematic{
    constructor(public name: string) {}
}
export class Wedding extends Tematic{
    constructor(name: string, description: string){
        super(name);
    }
}
export class Company extends Tematic{
    constructor(name: string, description: string){
        super(name);
    }
}
export class Birthday extends Tematic{
    constructor(name: string, description: string){
        super(name);
    }
}