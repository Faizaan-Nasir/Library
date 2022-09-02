// fetching today's date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var date = dd + '/' + mm + '/' + yyyy
function displaydate() {
    document.getElementById("date_of_issue").innerHTML = date
}
function save() {
    localStorage.setItem('name' + document.getElementById("sno").value, document.getElementById("name").value)
    localStorage.setItem('book_issued' + document.getElementById("sno").value, document.getElementById("book_issued").value)
    localStorage.setItem('date_of_issue' + document.getElementById("sno").value, dd + '/' + mm + '/' + yyyy)
    localStorage.setItem('date_of_return' + document.getElementById("sno").value, document.getElementById("date_of_return").value)
    document.getElementById("verified").innerHTML = "Data Submitted Sucessfully"
    setTimeout(function reload() { location.reload() }, 3000)
}
// requests for info and decides whether the student has a fine or not
function request() {
    document.getElementById("name").innerHTML = localStorage.getItem('name' + document.getElementById("sno").value)
    document.getElementById("book_issued").innerHTML = localStorage.getItem('book_issued' + document.getElementById("sno").value)
    document.getElementById("date_of_issue").innerHTML = localStorage.getItem('date_of_issue' + document.getElementById("sno").value)
    document.getElementById("date_of_return").innerHTML = localStorage.getItem('date_of_return' + document.getElementById("sno").value)
    DOR = localStorage.getItem('date_of_return' + document.getElementById("sno").value)
    yyyyr = `${DOR.charAt(6)}` + `${DOR.charAt(7)}` + `${DOR.charAt(8)}` + `${DOR.charAt(9)}`
    mmr = `${DOR.charAt(3)}` + `${DOR.charAt(4)}`
    ddr = `${DOR.charAt(0)}` + `${DOR.charAt(1)}`
    if (yyyy > yyyyr) {
        document.getElementById("penalty").innerHTML = 'The Student has a Fine'
    }
    else if (mm > mmr) {
        document.getElementById("penalty").innerHTML = 'The Student has a Fine'
    }
    else if (dd > ddr) {
        document.getElementById("penalty").innerHTML = 'The Student has a Fine'
    }
    else {

    }
}
// clears data:
function cleardata() {
    localStorage.removeItem('book_issued' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_issue' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_return' + document.getElementById("sno").value)
    request()
}
