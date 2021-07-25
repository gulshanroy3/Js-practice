let content = document.querySelector("#content")
let send = document.querySelector("#send")
let deletebtn = document.querySelector("#delete")
let noOftimesSend = 0
let noOftimesDelete = 0
send.addEventListener('click', (e) => {
    console.log(content.textContent)
    if (content.textContent !== 'send') {
        content.innerHTML = 'send'
        // noOftimesSend++;
        send.classList.add('pointer-events')
        deletebtn.classList.remove('pointer-events')
    }
})
deletebtn.addEventListener('click', (e) => {
    if (content.textContent !== 'delete') {
        content.innerHTML = 'delete'
        // noOftimesDelete++;
        deletebtn.classList.add('pointer-events')
        send.classList.remove('pointer-events')
    }
})

//send=>5
//delete=>4, send=>1
console.log(2 === '2')//false
console.log(2 == '2')//true
console.log(2 + 2 + '2')//22
console.log(2 - '2')//0
/**
 * button=>api=>till that loader=>show that data
 *
 */