function login()
{
    accno=log_acno.value
    passlog=log_passw.value
    console.log(accno,passlog);

  if(accno in localStorage)
  {
   details =JSON.parse(localStorage.getItem(accno))

   if(passlog == details.passw)
    {
    alert("successfull")
     
     window.location="./transfer.html"

     
    }
   else
   {
    alert("incorrect password")
   }
  }
  else{
    alert("Account number not found")
  }
}



/////////////////////////////////////////////////////////////////////////////////

