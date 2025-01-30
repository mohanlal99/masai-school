async function getUserData(){
    let user = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await user.json()
    console.log(data)
}

getUserData();