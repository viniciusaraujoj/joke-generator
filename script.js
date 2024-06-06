const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

const randomJoke = () => {
  const req = new XMLHttpRequest();

  req.open('GET', 'https://api.chucknorris.io/jokes/random');

  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      joke.textContent = data.value;
    } else {
      joke.textContent = 'Something went wrong';
    }
  };

  req.send();
};

document.addEventListener('DOMContentLoaded', randomJoke);
btn.addEventListener('click', randomJoke);
