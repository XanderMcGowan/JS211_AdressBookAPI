
let arrayOfRandomUsers = []

const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then( (response) => response.json())
    .then( (json) => arrayOfRandomUsers = json)
}

const logUserArr= () => {
    console.log(arrayOfRandomUsers)
}


