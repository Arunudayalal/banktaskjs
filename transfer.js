function logout() {
    window.location = "./index.html"
    localStorage.clear();
}

// let user =localStorage.getItem(accno)
// console.log(user);
// // head1.innerHTML = `welcome ${user}`

// let amnt=0
// let withdraw=0
// let totalbalance=0
function deposit() {
    acno = d_acno.value
    amnt = dep_amount.value
    amnt=Math.floor(amnt)
    if (acno in localStorage) {
        accountdetails = JSON.parse(localStorage.getItem(acno))
        // let totalbalance = parseInt(accountdetails.balance)
        let depositamount = amnt
        if (accountdetails.accno == acno && depositamount <= 0) {
            alert("Enter the amount")

        }
        else {
            // accountdetails.balance+=amnt;
            accountdetails.balance += depositamount;
            // accountdetails.balance = totalbalance;

            console.log(typeof (accountdetails.balance));
            alert("amount added")
            localStorage.setItem(acno, JSON.stringify(accountdetails))
            alert(`balance is ${accountdetails.balance}`)
            dbal.innerHTML = `Your Current Balance is ${accountdetails.balance}`

        }
    }
    else {
        alert("incorrect account number")
    }
}




function withdraww() {
    acno = w_acno.value
    amnt = w_amt.value
    amnt=Math.floor(amnt)
    if (acno in localStorage) {
        accountdetails = JSON.parse(localStorage.getItem(acno))
        let totalbalance = Math.floor(accountdetails.balance)
        let withdrawamount = Math.floor(amnt)
        if (acno==accountdetails.accno && withdrawamount<=0) {
            alert("Please enter the amount")
        }

        else if(totalbalance<=withdrawamount){
            alert("insufficient balance")
            

        }
        else {
            totalbalance -= withdrawamount;
            accountdetails.balance = totalbalance;
            alert("success")
            localStorage.setItem(acno, JSON.stringify(accountdetails))
            alert(`balance is ${accountdetails.balance}`)
            wbal.innerHTML = `Your Current Balance is ${accountdetails.balance}`

        }
    }
    else {
        alert("incorrect account number")
    }
}