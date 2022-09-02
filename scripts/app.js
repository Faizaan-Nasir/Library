// fetching today's date:

function search() {
    let s = document.getElementById("search").value
    x = `${Number(s)}`
    if (x == 'NaN') {
        var sno = localStorage.getItem('sno' + s)
        if (sno) {
            document.getElementById("sno").innerHTML = sno;
            request()
        }
        else {
            alert("Such a book is not issued by any student!")
        }
    }
    else {
        document.getElementById("sno").innerHTML = s;
        request()
    }
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var date = dd + '/' + mm + '/' + yyyy
var date_format = new Date(yyyy + '-' + mm + '-' + dd)
function displaydate() {
    document.getElementById("date_of_issue").innerHTML = date
}
function save() {
    if (`${Number(document.getElementById("sno").value)}` == 'NaN') {
        alert("Student ID Number field must be a number. Cannot run the function")
    }
    else {
        if (`${document.getElementById("name").value}` == '' || `${document.getElementById("book_issued").value}` == '' || `${document.getElementById("sno").value}` == '' || `${document.getElementById("date_of_return").value}` == '') {
            alert("Necessary field(s) is left blank, please fill out the field(s) before submitting.")
        }
        else {
            localStorage.setItem('name' + document.getElementById("sno").value, document.getElementById("name").value)
            localStorage.setItem('book_issued' + document.getElementById("sno").value, document.getElementById("book_issued").value)
            localStorage.setItem('sno' + document.getElementById("book_issued").value, document.getElementById("sno").value)
            localStorage.setItem('date_of_issue' + document.getElementById("sno").value, dd + '/' + mm + '/' + yyyy)
            localStorage.setItem('date_of_return' + document.getElementById("sno").value, document.getElementById("date_of_return").value)
            document.getElementById("verified").innerHTML = "Data Submitted Sucessfully"
            setTimeout(function reload() { location.reload() }, 3000)
        }
    }
}
// requests for info and decides whether the student has a fine or not:
function request() {
    document.getElementById("name").innerHTML = localStorage.getItem('name' + document.getElementById("sno").value)
    document.getElementById("book_issued").innerHTML = localStorage.getItem('book_issued' + document.getElementById("sno").value)
    document.getElementById("date_of_issue").innerHTML = localStorage.getItem('date_of_issue' + document.getElementById("sno").value)
    document.getElementById("date_of_return").innerHTML = localStorage.getItem('date_of_return' + document.getElementById("sno").value)
    // here starts the code for penalty:
    var DOR = localStorage.getItem('date_of_return' + document.getElementById("sno").value)
    var yyyyr = `${DOR.charAt(6)}` + `${DOR.charAt(7)}` + `${DOR.charAt(8)}` + `${DOR.charAt(9)}`
    var mmr = `${DOR.charAt(3)}` + `${DOR.charAt(4)}`
    var ddr = `${DOR.charAt(0)}` + `${DOR.charAt(1)}`
    var DOR_format = new Date(yyyyr + '-' + mmr + '-' + ddr)
    var dif = (date_format - DOR_format) / (1000 * 60 * 60 * 24)
    var penalty = dif * 0.5
    if (yyyy > yyyyr) {
        document.getElementById("penalty").innerHTML = 'The student has a fine of AED ' + penalty
    }
    else if (mm > mmr) {
        document.getElementById("penalty").innerHTML = 'The student has a fine of AED ' + penalty
    }
    else if (dd > ddr) {
        document.getElementById("penalty").innerHTML = 'The student has a fine AED ' + penalty
    }
    else {

    }
}
// clears data:
function cleardata() {
    if (confirm("Are you sure you want to clear data?") == true) {
        localStorage.removeItem('book_issued' + document.getElementById("sno").value)
        localStorage.removeItem('date_of_issue' + document.getElementById("sno").value)
        localStorage.removeItem('date_of_return' + document.getElementById("sno").value)
        request()
    }
}