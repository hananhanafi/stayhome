export function getCases() {
let url = `https://pomber.github.io/covid19/timeseries.json`;
return fetch(url)
    .then(response => {
    return response.json();
    })
    .then(data => {
    return data;
    })
}
