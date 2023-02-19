// JSON Placeholder es una API ficticia para hacer pruebas
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      console.log(item.email);
    });
  });
