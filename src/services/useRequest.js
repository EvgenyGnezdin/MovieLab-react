const request = async (url, method = 'GET', body = null, headers = {
    'X-API-KEY': 'b10dc333-0cae-4f08-a1bd-109a38ce85d3', 'Content-Type': 'application/json'}) => {
    try {
        const response = await fetch(url,  {method, body, headers})
        if(!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e.message);
        throw e
    }
}
export default request