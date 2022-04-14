/**
 * @returns {Promise<[{id: int, lastname: string, email: string}]>}
 */
function getUserData() {
    return fetch('/user-data').then(response => response.json());
}

export {getUserData}