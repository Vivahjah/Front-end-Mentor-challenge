const APIURL = 'https://api.adviceslip.com/advice'

const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

const fetchAdviceApi = async() => {
    const res = await fetch(APIURL);
    const data = await res.json();

    title.innerHTML = `Advice # ${data.slip.id}`

    text.innerHTML = `${data.slip.advice}`

    console.log(data.slip.id)
}


// const fetchAdviceApi = async() => await fetch(APIURL).then(res => res.json());






// btn.addEventListener('click', () => {

//     fetchAdviceApi();



// })