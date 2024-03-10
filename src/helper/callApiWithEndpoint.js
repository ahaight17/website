export async function callApiWithEndpoint(endpoint) {
    let res = await fetch(`${process.env.API_ENDPOINT}${endpoint}`, {
        method: "GET"
    })

    return res.json()
}