let buttonJS = document.getElementById("button-js")
let inputJS = document.getElementById("input-js")
let i = 1;
// buttonJS.addEventListener('click', onbuttonClick)
// inputJS.addEventListener('input', function (e) {
//     console.log(e)

// })
// function onbuttonClick(e) {
//     // console.log(e)
//     buttonJS.innerHTML = 'this is button' + i
//     i++;

// }
//function, arrow function
// const buttonClick = (args) => {
//     console.log("clicked", args)
// }
function buttonClick() {
    buttonJS.innerHTML = 'this is button' + i
    i++;
}
function onInputChange(value) {
    if (value === 'suma') inputJS.className = 'for-input'
    else {
        if (inputJS.className !== 'white-color') {
            inputJS.className = 'white-color'
        }
    }
}

//debounce-> last input next input difference x time dont call function
//throttle-> difference btw last work and next work should be x ms.

/**
 * single threaded
 *  callstack, web api's, callback queue, ms queue, event loop
 * cb1,cb2,cb3,cb4
 * 
 */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => printjson(json))

function printjson(json) {
    console.log(json)
}
setTimeout(() => console.log("settimeout"), 2000)

function test() {
    let i = 1;
    function y() {
        console.log(i)
    }
    y()
}
test()

function callBackBlock() {
    let date = new Date().getTime()
    let newDAte = date + 5000
    while (new Date().getTime() < newDAte) {

    }
    console.log('while loop completed')
}

callBackBlock()

console.log("ye wala json")

