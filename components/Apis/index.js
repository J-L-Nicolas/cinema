const urlApi = "https://randomuser.me/api/"

const apiRequest = async() => {
    try {
        const result = await fetch(urlApi)
        const jsonData = await result.json()
        return jsonData
    } catch (error) {
        console.error(error)
        return "error"
    }
}

export {apiRequest}