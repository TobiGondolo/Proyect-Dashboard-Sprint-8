export const fetchRequest = async (endpoint, params) => {
    /* params: {key:value} */
    const baseURL = "http://localhost:3000/"
    const formatedParams = "";

    return fetch(baseURL + endpoint + formatedParams)
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))
}
