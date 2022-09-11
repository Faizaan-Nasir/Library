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

// here starts the code for penalty:
// var DOR = localStorage.getItem('date_of_return' + document.getElementById("sno").value)
// var yyyyr = `${DOR.charAt(6)}` + `${DOR.charAt(7)}` + `${DOR.charAt(8)}` + `${DOR.charAt(9)}`
// var mmr = `${DOR.charAt(3)}` + `${DOR.charAt(4)}`
// var ddr = `${DOR.charAt(0)}` + `${DOR.charAt(1)}`
// var DOR_format = new Date(yyyyr + '-' + mmr + '-' + ddr)
// var dif = (date_format - DOR_format) / (1000 * 60 * 60 * 24)
// var penalty = dif * 0.5
// if (yyyy > yyyyr) {
//     document.getElementById("penalty").innerHTML = 'The student has a fine of AED ' + penalty
// }
// else if (mm > mmr) {
//     document.getElementById("penalty").innerHTML = 'The student has a fine of AED ' + penalty
// }
// else if (dd > ddr) {
//     document.getElementById("penalty").innerHTML = 'The student has a fine AED ' + penalty
// }

// clears data:
function cleardata() {
    if (confirm("Are you sure you want to clear data?") == true) {
        localStorage.removeItem('book_issued' + document.getElementById("sno").value)
        localStorage.removeItem('date_of_issue' + document.getElementById("sno").value)
        localStorage.removeItem('date_of_return' + document.getElementById("sno").value)
        request()
    }
}
