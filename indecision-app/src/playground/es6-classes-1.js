class Person {
    constructor(name = 'Anonymous', age = '28') {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return 'Test';
    };

    getDescription() {
        return `${this.name} is ${this.age} years(s) old`
    };
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major;
    };

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    };
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        return "Traveler greeting";
    }
}

const me = new Student('John', 26, 'Computer Science');
console.log(me.hasMajor());

const traveler = new Traveler('Dam', 30, 'Teacher');
console.log(traveler.getGreeting())


