export function getData (url = 'http://localhost:3000/134111.json') {
  return fetch(url)
    .then(response => response.json())
}