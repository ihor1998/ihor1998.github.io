class Vegetable{
    constructor(name){
        this.name = name;
    }
}

class Animal{
    constructor(legs){
        this.legs = legs;
        this.stomatch = [];
    }

    eat(food) {
        console.log('Eating');
        this.stomatch.push(food);
    }
}

class Rabbit extends Animal{
    constructor(breed) {
        super();
        this.breed = breed;
    }

    eat(food) {
        if (!(food instanceof Vegetable)) {
            throw new Error('Rabbit only eat vegetable!');
        }

        super.eat(food);
    }
    

    jump() {
        console.log('Jumping');
    }
}

class Snake extends Animal{
    constructor(isPoisonous) {
        super();
        this.isPoisonous = isPoisonous;
    } 

    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error('Snake only eat rabbit!');
        }

        super.eat(food);
    }
    
    crawl() {
        console.log('Crawling');
    }
}

class Human extends Animal{
    constructor(firstName, lastName) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(food) {
        if (food instanceof Human) {
            throw new Error('Homo homini lupus est. But not literally');
        }

        super.eat(food);
    }


    walk() {
        console.log(`${ this.firstName } ${ this.lastName }, walking)`)
    }
    
    greet() {
        console.log(`Greeting, ${ this.firstName } ${ this.lastName }.`)
    }
}
