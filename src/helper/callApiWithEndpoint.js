export async function callApiWithEndpoint(endpoint) {
    let res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${endpoint}`, {
        method: "GET"
    })

    return res.json()
}