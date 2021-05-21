const pageTop = document.getElementById('page-top');

pageTop.addEventListener('click',e => {
  e.preventDefault();
  // const rect = pageTop.getBoundingClientRect().top;
  // const offSet = window.pageYOffset;
  // const gap = 60;
  // const terget = rect + offSet - gap;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});