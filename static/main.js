import {getMockData} from "./myPromise.js";
import {getUserData} from "./api.js";

function populateTable() {
    console.log('populating table');
    let table = document.getElementById('data-table');
    table.innerHTML = '';

    let userDataPromise = getMockData(); // you could mock your data
    userDataPromise = getUserData(); // or fetch it from the server
    console.log(userDataPromise);

    // populate table   
    userDataPromise.then(userData => {
        console.log('got user Data', userData)
        for (let userEntry of userData) {
            let row = document.createElement('tr');
            row.innerHTML = `
            <td>${userEntry.id}</td>
            <td>${userEntry.lastname}</td>
            <td>${userEntry.email}</td>
            `;
            table.appendChild(row);
        }
    });
}


window.populateTable = populateTable