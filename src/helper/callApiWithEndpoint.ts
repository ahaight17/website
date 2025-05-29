export async function callApiWithEndpoint(endpoint: string) {
    let res = await fetch(`${process.env.API_ENDPOINT}${endpoint}`, {
        method: "GET"
    })

    return res.json()
}