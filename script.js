// const ab = (list)=>{
//     return list.reduce((acc, curr)=>{
//         acc[curr.id] = curr.value;
//         return acc;
//     },{})
// }

// const array =[
//     {
//         id: "key1",
//         value: "value1"
//     },
//     {
//         id: "key2",
//         value: "value2"
//     },
//     {
//         id: "key3",
//         value: "value3"
//     }
// ]
// console.log(ab(array));

import { attach } from "./js/store.js";
import App from "./component/App.js"

attach(App, document.getElementById("root"));
