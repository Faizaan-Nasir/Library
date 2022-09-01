var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
function save() {
    localStorage.setItem('name' + document.getElementById("sno").value, document.getElementById("name").value)
    localStorage.setItem('book_issued' + document.getElementById("sno").value, document.getElementById("book_issued").value)
    localStorage.setItem('date_of_issue' + document.getElementById("sno").value, dd + '/' + mm + '/' + yyyy)
    localStorage.setItem('date_of_return' + document.getElementById("sno").value, document.getElementById("date_of_return").value)
    document.getElementById("verified").innerHTML = "Data Submitted Sucessfully"
    setTimeout(function reload() { location.reload() }, 3000)
}
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
        alert("you have a fine")
    }
    else if (mm > mmr) {
        alert("you have a fine")
    }
    else if (dd > ddr) {
        alert("you have a fine")
    }
    else {

    }
}
function cleardata() {
    localStorage.removeItem('book_issued' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_issue' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_return' + document.getElementById("sno").value)
    request()
}
