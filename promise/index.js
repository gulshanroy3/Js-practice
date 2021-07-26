function dividePromise(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) reject("divide by 0 is not allowed")
        else resolve(divide(a, b))
    })
}

function divide(a, b) {
    try {
        return a / b;
    } catch (error) {
        return error
    }
}

// dividePromise(1, 0)
//     .then(res => { console.log(res) })
//     .catch(err => console.log(err, "err"))
//     .finally(() => console.log("finally"))

function getData() {
    return new Promise((resolve, reject) => {
        try {
            let data = fetch('https://jsonplaceholder.typicode.com/todos')
            // console.log(data)
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}
// getData().then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))

async function xyz() {
    console.log("start")
    // test().then(res => console.log(res))
    let data = await test()
    console.log(data)
    // test()

    console.log("end")
}
function test() {
    // console.log("middle")
    return new Promise((resolve, reject) => {
        resolve("middle")
    })
}
// xyz()

//async await
async function asyncfun() {
    let _data = []
    let data = await fetch('https://jsonplaceholder.typicode.com/todos')
    _data = await data.json()
    return _data
}
// console.log(asyncfun().then(res => console.log(res)).catch(err => console.log(err, "err")))
async function main() {
    let data = {}
    let _data = {}
    try {
        data = await asyncfun()
        data = { data: data, success: true }
    } catch (error) {
        console.log(error)
        data = { data: [], success: false, error: error }
    }
    try {
        _data = await getData()
        _data = { data: _data, success: true }
    } catch (error) {
        console.log(error)
        _data = { data: [], success: false, error: error }
    }
    console.log(data, _data)
}
main()
//async=>return promise=>you can get data to do some stuff in function