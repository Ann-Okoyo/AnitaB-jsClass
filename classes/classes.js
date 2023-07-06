class Person{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;

    }
    greet(){
        console.log('Hello');


    }

};
let person = new Person('Henry',26,'7ft');
console.log({person})

// inheritance

class Robot extends Person{
    constructor(name,age,height){


        super(name,age,height);
    }
       
};
let robot =new Robot("Elsa",3,'5ft')
console.log({robot})

class CrazyRobot extends Person{
    constructor(name,age,height,dominate){
        super(name,age,height);
        this.walk=true
        this.height='7ft'
        this.dominate=dominate

    }
    world(){
        console.log('I will ${this.dominate} the world');
    }
}
let crazy=CrazyRobot('Felix',4,'3ft','enslave');
crazy.world();

//inerit from crazy robot 
class LovingRobot extends Person{
    constructor(name,age,height,dominance){
        super(name,age,height,dominance)
    }
    
}
let loving=LovingRobot('Amanda',10,'5ft6','love');
console.log({loving});