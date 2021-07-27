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

///sum(9)(8)(7).....()
/**
 * let x=sum(9)
 * x(8)
 */

// function sum(a) {
//     let s = 0
//     s = s + a
//     return function (b) {
//         s = s + b;
//         return function (b) {
//             s = s + b;
//             return s
//         }
//     }
// }

// let x = sum(9)
// console.log(x)
// console.log(sum(9)(8)(7)(6))


function sum(a) {
    let target = a;
    return function inner(b) {
        if (b) {
            target += b;
            return inner;
        }
        return target;
    }
}

console.log(sum)

function xyx(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1")
            cb("1")
        }, 3000)
    })
    // fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).
    //     then(data => cb(data))
}

function xx() {
    xyx(cc)
    console.log("mm")
}
function cc(data) {
    //do anything with data
    console.log(data)
}
xx()
