const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

const getJoke = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();
    joke.innerText = data.value;
    
  } catch (error) {
    joke.innerText = error;
  }
};

document.addEventListener('DOMContentLoaded', getJoke);
btn.addEventListener('click', getJoke);

console.log();
