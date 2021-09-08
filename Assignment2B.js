class QueenAttack {
    constructor( pos1 , pos2){
        this.Q1=pos1;
        this.Q2=pos2;
    }
    canAttack(){
        return this.Q1.x == this.Q2.x || this.Q1.y == this.Q2.y || Math.abs(this.Q2.x - this.Q1.x)==Math.abs(this.Q2.y - this.Q1.y);
    }
}

let Queen1={
    x:0,
    y:0
}
let Queen2={
    x:7,
    y:7
}

q=new QueenAttack(Queen1 , Queen2);
console.log(q.canAttack());