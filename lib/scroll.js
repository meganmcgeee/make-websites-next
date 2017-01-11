import smoothscroll from 'smoothscroll';

export default id => event => {
  if (document) {
    event.preventDefault();
    const elem = document.getElementById(id);
    return smoothscroll(elem);
  }
  return true;
};
