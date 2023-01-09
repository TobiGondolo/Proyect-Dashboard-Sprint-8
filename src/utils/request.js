export const fetchRequest = async (endpoint, params) => {
    /* params: {key:value} */
    const baseURL = process.env.REACT_APP_API_URL
    const formatedParams = "";

    return fetch(baseURL + endpoint + formatedParams)
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))
}
