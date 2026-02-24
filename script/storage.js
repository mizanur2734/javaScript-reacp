const handleToStorage =() =>{
    const nameField = document.getElementById('name').value;
    const idField = document.getElementById('id').value;
    const data = {idField, nameField};
    localStorage.setItem(idField, JSON.stringify(data));
}

const storedItem = localStorage.getItem('2143546');
console.log(JSON.parse(storedItem))

const handleClick = () =>{
    localStorage.clear();
}