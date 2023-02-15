const fetchData = url => fetch(url);

const request = fetchData('https://jsonplaceholder.typicode.com/posts');

request
  .then(response => response.json())
  .then(data => {
    const fragment = document.createDocumentFragment();
    data.forEach(item => {
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.textContent = item.title;
      p.textContent = item.title;
      fragment.append(h2);
      fragment.append(p);
    });
    document.body.append(fragment);
  });
