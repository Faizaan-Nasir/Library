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
}
function cleardata() {
    localStorage.removeItem('book_issued' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_issue' + document.getElementById("sno").value)
    localStorage.removeItem('date_of_return' + document.getElementById("sno").value)
    request()
}
