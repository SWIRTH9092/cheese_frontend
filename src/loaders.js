//----------------------
//  Cheeses Loader URL
//----------------------
const URL = "https://chessebkend.onrender.com";

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses = await response.json()
    return cheeses
}