class Person {
    constructor(name = 'Anonymous', location = 'test location') {
        this.name = name,
        this.location = location
    }
    getGreeting() {
        return 'Test';
    };
}

const me = new Person('John');

