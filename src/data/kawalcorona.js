import Axios from "axios";
export function getKawalCorona(q="") {
    let url = `https://api.kawalcorona.com/${q}`;
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
  }
  

// export function getKawalCorona(q="") {
//     Axios.get(`https://api.kawalcorona.com/${q}`)
//         .then(response=>{
//             return response.data
//         })
//         .then(data=>{
//             return data;
//         })
//         .catch(error=>{
//             console.log(error)
//         })
// }
