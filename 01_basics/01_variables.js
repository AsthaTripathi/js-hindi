const accountId = 144553
let accountEmail = "astha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


//accountId = 2

accountEmail = "hac@hac.com"
accountPassword = " 212121"
accountCity = "Bengaluru"
let accountState;
/*
Prefer not to use var keyword
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);