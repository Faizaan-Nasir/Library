// when fetch data is pressed
function convert() {
    document.getElementById("search").innerHTML = document.getElementById("sno").value
    search()
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
                var DOR = data[i]["date_of_return"]
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
                    document.getElementById("penalty").innerHTML = ""
                }
            }
            else if (lib['name'] === `${s}`) {
                const a = i
                console.log(a)
                document.getElementById("sno").innerHTML = lib['sno']
                document.getElementById("name").innerHTML = lib['name']
                document.getElementById("book_issued").innerHTML = lib['book_issued']
                document.getElementById("date_of_issue").innerHTML = lib['date_of_issue']
                document.getElementById("date_of_return").innerHTML = lib['date_of_return']
                var DOR = data[i]["date_of_return"]
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
                    document.getElementById("penalty").innerHTML = ""
                }
            }
            else if (lib['book_issued'] === `${s}`) {
                const a = i
                console.log(a)
                document.getElementById("sno").innerHTML = lib['sno']
                document.getElementById("name").innerHTML = lib['name']
                document.getElementById("book_issued").innerHTML = lib['book_issued']
                document.getElementById("date_of_issue").innerHTML = lib['date_of_issue']
                document.getElementById("date_of_return").innerHTML = lib['date_of_return']
                var DOR = data[i]["date_of_return"]
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
                    document.getElementById("penalty").innerHTML = ""
                }

            }

        }

    }

    getData()


}
// Submit
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    async function getData() {
        const api_url = "https://sheetdb.io/api/v1/qpwk686wb4g5z"
        const response = await fetch(api_url)
        const data = await response.json()
        let sno = document.getElementById("sno").value
        let present = false
        for (var i = 0; i < data.length; ++i) {

            if (data[i]['sno'] === `${sno}`) {
                present = true
            }
        }
        if (present == true) {
            let update_url = `https://sheetdb.io/api/v1/qpwk686wb4g5z/sno/${sno}`;
            fetch(update_url, {
                method: "PUT",
                body: JSON.stringify({
                    data: [
                        {
                            book_issued: document.getElementById("book_issued").value,
                            date_of_issue: document.getElementById("date_of_issue").value,
                            date_of_return: document.getElementById("date_of_return").value,
                        },
                    ],
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((html) => {
                    document.getElementById(
                        "verified"
                    ).innerHTML = "Data Updated Successfully";
                })
                .catch((err) => alert("Error occured"));

        }
        else {
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            })
                .then((response) => response.json())
                .then((html) => {
                    document.getElementById("verified").innerHTML =
                        "Data Submitted Successfully";
                });
        }

    }
    getData()
});
// reset button
form.addEventListener("reset", (e) => {
    e.preventDefault();
    // actual reset starts here
    const api_url = "https://sheetdb.io/api/v1/qpwk686wb4g5z";
    async function reset() {
        const response = await fetch(api_url);
        const data = await response.json();
        let sno = document.getElementById("sno").value;
        let name = document.getElementById("name").value;
        // loop to find the 'i' such that data[i]["sno"]= the data entered by user as sno
        for (var i = 0; i < data.length; ++i) {
            if (data[i]["sno"] === `${sno}`) {
                console.log(data[i]["book_issued"]);
                console.log(sno);
                let update_url = `https://sheetdb.io/api/v1/qpwk686wb4g5z/sno/${sno}`;
                fetch(update_url, {
                    method: "PUT",
                    body: JSON.stringify({
                        data: [
                            {
                                name: name,
                                book_issued: "",
                                date_of_issue: "",
                                date_of_return: "",
                            },
                        ],
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((html) => {
                        document.getElementById(
                            "verified"
                        ).innerHTML = "Data Erased Successfully";
                    })
                    .catch((err) => alert("Error occured"));
            }
        }
    }
    // legit just running the reset() function
    reset();
});
