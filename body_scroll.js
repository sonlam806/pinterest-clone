const body = document.body;

body.addEventListener('wheel', function (event) {
  // scroll down
  if (event.deltaY > 0) {
    // Scroll to specific values
    // scrollTo is the same
    // window.scroll({
    //   top: 2500,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    // return;
  } else {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth',
    // });
  }
});
