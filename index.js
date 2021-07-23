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

