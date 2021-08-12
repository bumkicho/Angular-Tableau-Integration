// memoization
const gridTraveler = (m:number, n:number, memo:testObject):number => {
    //are the arguments in memo
    const key = m+','+n;
    if(memo.hasKey(key)) return memo.getKeyValue(key);

    if(m==1 && n==1) return 1;
    if(m==0 || n==0) return 0;

    memo = new testObject(key, gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo));

    return memo.getKeyValue(key);
}

export class testObject {
    public key:string ='';
    public value: number=0;

    constructor(a:string, b:number){
        this.key = a;
        this.value = b;
    }

    hasKey(a:string):boolean {
        if(this.key==a) { return true; }
        return false;
    }

    getKeyValue(a:string): number {
        if(this.hasKey(a)) {
            return this.value;
        }
        return 0;
    }
}

console.log(gridTraveler(8,8, new testObject('',0)));