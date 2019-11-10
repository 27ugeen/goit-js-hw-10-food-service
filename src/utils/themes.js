import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleClick() {
  if (refs.switch.checked) {
    refs.body.classList.remove(`${Theme.LIGHT}`);
    refs.body.classList.add(`${Theme.DARK}`);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(`${Theme.DARK}`);
    refs.body.classList.add(`${Theme.LIGHT}`);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

refs.switch.addEventListener('change', handleClick);

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.switch.checked = true;
  handleClick();
}
