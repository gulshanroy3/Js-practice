let main = document.querySelector("#main")
let send, content;
let butttonLoading = false
let btns = document.querySelectorAll('.show')
const data = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
},
{
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
},
{
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
},
{
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
},
{
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
},
{
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
},
{
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
},
{
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
},
{
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
}]
btns.forEach(eachbtn => {

    eachbtn.addEventListener('click', (e) => {
        console.log(eachbtn)
    })
})
/**
 * 
 * 1.add
 * 2.add
 * 3.add 
 */
function callApiUsingSetTimeout(e) {
    if (!butttonLoading) {
        send.innerHTML = 'loading...'
        butttonLoading = true
        setTimeout(() => {
            content.innerHTML = createContent(data)
            send.innerHTML = 'Get Data'
            butttonLoading = false
        }, 2000)
    }
}
function callApi(e) {
    if (!butttonLoading) {
        send.innerHTML = 'loading...'
        content.innerHTML = 'loading...'
        butttonLoading = true
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => {
            content.innerHTML = createContent(data)
            send.innerHTML = 'Get Data'
            butttonLoading = false
        }).catch(err => {
            console.log(err)
            content.innerHTML = 'Something went wrong'
            send.innerHTML = 'Get Data'
            butttonLoading = false
        })

    }
}
function createContent(data) {
    let str = ``
    data.forEach(eachData => {
        str += `<div>
        <span class='title'>${eachData.id}</span>.
        <span class='title'>${eachData.title}</span>
        </div>`
    })
    return str
}

/**Promise=> resolve,reject, await/async callbacks */

function init() {
    setTimeout(() => {
        main.innerHTML = `<div id='content' class="content"></div>
        <button id='api-button'>Get Data</button>`
        content = document.querySelector("#content")
        send = document.querySelector("#api-button")
        send.addEventListener('click', callApi)
    }, 2000)
}
init()