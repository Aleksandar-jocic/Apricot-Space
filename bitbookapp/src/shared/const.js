const url = "http://bitbookapi.azurewebsites.net/api"
const headers = {


    "Content-Type": "application/json",
    "Key": "0C0DEC2",
    "SessionId": sessionStorage.getItem("SessionId")


}
const headersImg = {



    "Key": "0C0DEC2",
    "SessionId": sessionStorage.getItem("SessionId")


}


export {
    url,
    headers,
    headersImg
}