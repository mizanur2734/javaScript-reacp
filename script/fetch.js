// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     friends: ['Tom', 'Jerry', 'Mickey', 'Donald'],
//     family: {
//         father: "Robert Doe",
//         mother: "Jane Doe",
//         sister: "Emily Doe"
//     } 
// }

// const jsonData = JSON.stringify(person);
// const parseData = JSON.parse(jsonData);
// console.log(jsonData);
// console.log(parseData)

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));


// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     friends: ['Tom', 'Jerry', 'Mickey', 'Donald'],
//     family: {
//         father: "Robert Doe",
//         mother: "Jane Doe",
//         sister: "Emily Doe"
//     } 
// }

// const keys = Object.keys(person);
// const values = Object.values(person);
// console.log(keys);
// console.log(values)

// const products = [
//   { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
//   { name: "phone", price: 7000, brand: "iphone", color: "golden" },
//   { name: "watch", price: 3000, brand: "casio", color: "black" },
//   { name: "sunglass", price: 300, brand: "ribon", color: "yellow" },
//   { name: "camera", price: 9000, brand: "canon", color: "gray" },
// ];

// const newData = 
//     {
//         name: "laptop", price: 31000, brand: "lenovo", color: "silver"
//     }

// const newArray2 = [...products, newData];
// // console.log(newArray2)
// const remaining = products.filter(product => product.brand !== "lenovo");
// // console.log(remaining)


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));