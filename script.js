const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 1 is completed")
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise 1 resolved")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is completed")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Promise 2 is resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({usrname: "Hamza", email: "hamza@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})