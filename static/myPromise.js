/**
 * @returns {Promise<[{id: int, lastname: string, email: string}]>}
 */
function getMockData() {
    let mockData = [
        {id: 1, lastname: 'Simpson', email: 'bart.simpson@gmail.com'},
        {id: 2, lastname: 'Lovelace', email: 'ada.lovelace@hotmail.com'}
    ];
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(mockData);
        }, 5000);
    }));
}

export {getMockData};