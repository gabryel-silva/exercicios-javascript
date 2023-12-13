async function getUsers(){
    const res = await fetch("https://dummyapi.io/data/v1/user?created=1", {
        headers: {
            "app-id": "6568824fac9aac1ed67dbc94",
        }
    });

    const users = await res.json()
    console.log(users);
}

getUsers()

async function createUser() {
    const res = await fetch("https://dummyapi.io/data/v1/user/create", {
        method: postMessage,
        headers: {
            "api-id": "6568824fac9aac1ed67dbc94"
        }
    })
}