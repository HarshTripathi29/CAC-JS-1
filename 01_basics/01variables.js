 const accountId = 201500277
 let accountEmail = "harsh@gmail.com"
 var accountPassword = "12345678"
 accountCity = "Renukoot"
 let accountState;

/*
 accountId = 2
 console.log(accountId)   cannot change the value of constant
*/
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

 accountEmail = "harsh@gla.com"
 accountPassword = "67809"

 console.table([accountId,accountEmail, accountPassword, accountCity, accountState])