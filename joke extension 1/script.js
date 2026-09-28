async function getJokes() {
    const jokeElement = document.querySelector('#myJoke');
    jokeElement.textContent = "Loading joke...";
//https://xhamster1.desi/videos/what-are-you-doing-to-me-wicked-stepson-chapter-2-xhZSnQS
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        jokeElement.textContent = data.value;
    } catch (error) { 
        jokeElement.textContent = `Error messgage : ${error.message} | Error code : ${error.code}`;
    }
}
const button = document.querySelector('#btn');
button.addEventListener('click', getJokes);
window.addEventListener('load', getJokes); 