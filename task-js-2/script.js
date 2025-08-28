//1 task

const user = {
    name: 'Tilek',
    age: 17,
    hobby: 'coding'
}

console.log(user)

//2 task

const person = {
    sayHello: function(name) {
        return `Hello ${name}`
    }
}

console.log(person.sayHello('Alex'))

//3 task

const users = [
    { 
        name: 'John', status: 'user' 
    },
    {
        name: 'Ann', status: 'admin' 
    },
    { 
        name: 'Alex', status: 'user' 
    },
    { 
        name: 'Max', status: 'user' 
    }
]

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].status !== 'admin') {
        simpleUsersCount++;
    }
}

console.log('Количество простх пользователей:', simpleUsersCount)
