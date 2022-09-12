// when fetch data is pressed
function convert() {
    document.getElementById("search").innerHTML = document.getElementById("sno").value
    search()
}

// search bar (requests for data)
function search() {
    let s = document.getElementById("search").value

    const api_url = "https://sheetdb.io/api/v1/qpwk686wb4g5z"
    async function getData() {
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)
        let x = data.length
        for (i = 0; i < x; i++) {
            let lib = data[i]
            if (lib['sno'] === `${s}`) {
                const a = i
                console.log(a)
                document.getElementById("sno").innerHTML = lib['sno']
                document.getElementById("name").innerHTML = lib['name']
                document.getElementById("book_issued").innerHTML = lib['book_issued']
                document.getElementById("date_of_issue").innerHTML = lib['date_of_issue']
                document.getElementById("date_of_return").innerHTML = lib['date_of_return']
            }
            else if (lib['name'] === `${s}`) {
                const a = i
                console.log(a)
                document.getElementById("sno").innerHTML = lib['sno']
                document.getElementById("name").innerHTML = lib['name']
                document.getElementById("book_issued").innerHTML = lib['book_issued']
                document.getElementById("date_of_issue").innerHTML = lib['date_of_issue']
                document.getElementById("date_of_return").innerHTML = lib['date_of_return']
            }
            else if (lib['book_issued'] === `${s}`) {
                const a = i
                console.log(a)
                document.getElementById("sno").innerHTML = lib['sno']
                document.getElementById("name").innerHTML = lib['name']
                document.getElementById("book_issued").innerHTML = lib['book_issued']
                document.getElementById("date_of_issue").innerHTML = lib['date_of_issue']
                document.getElementById("date_of_return").innerHTML = lib['date_of_return']
            }

        }
    }

    getData()

}
// fetching today's date:
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var date = dd + '/' + mm + '/' + yyyy
var date_format = new Date(yyyy + '-' + mm + '-' + dd)
function displaydate() {
    document.getElementById("date_of_issue").innerHTML = date
}
