const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    friends: ['Tom', 'Jerry', 'Mickey', 'Donald'],
    10: "ten"
}

const name = person["name"];
const ten = person[10];
console.log(name)
console.log(ten)

const friend = person.friends[2];
console.log(friend)

const {name: personName, age: personAge} = person;
console.log(personName)
console.log(personAge)