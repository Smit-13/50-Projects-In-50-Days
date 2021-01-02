const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const newDate = new Date().toLocaleDateString();

setTimeout(getData, 1500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="laptop" />';
  title.innerHTML = 'Lorem ipsum dollar sit amet ';
  excerpt.innerHTML =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,ducimus.';
  profile_img.innerHTML =
    '  <img src="https://randomuser.me/api/portraits/men/45.jpg"  alt="author"  />';
  name.innerHTML = 'John Doe';
  date.innerHTML = newDate;

  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text');
  });
}
