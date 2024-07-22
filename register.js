function registeration()
{
    customer={
        uname:username.value,
        accno:acno.value,
        passw:pass.value,
        balance:0

    }
    
   if(customer.uname==""||customer.accno==""||customer.pass=="")
   {
    alert("fill all the details")
   }
   else {
    if(customer.accno in localStorage){
        alert("This account number is already registered")
    }
    else {
        localStorage.setItem(customer.accno,JSON.stringify(customer))
        alert("Successfully Registered")
        window.location="./login.html"
       }
   
   }
  
}