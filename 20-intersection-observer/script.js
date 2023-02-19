// const sections = document.querySelectorAll('.section');

// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: '-150px'
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     }
//     console.log(entry.target);
//     entry.target.classList.toggle('inverse');
//   });
// }, options);

// sections.forEach(section => {
//   observer.observe(section);
// });

const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section');
const viewport = document.querySelector('.viewport');

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: '-150px'
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle('inverse');
      console.log(entry);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
