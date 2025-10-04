// process.env არის ობიექტი, სადაც ინახება ყველა გარემოს ცვლადი
console.log("USERNAME:", process.env.USERNAME);
console.log("PATH:", process.env.PATH);

/*
 გარემოს ცვლადი = ოპერაციული სისტემის პარამეტრი,
   რომელიც ინახავს მნიშვნელობებს (მაგ: PATH, USER, NODE_ENV).

 .env ფაილი გამოიყენება პროექტში კონფიგურაციის საიდუმლო ინფორმაციისთვის,
   მაგ: DB_PASSWORD, API_KEY.

 process.env.PATH აბრუნებს string-ს, სადაც ჩამოწერილია დირექტორიები,
   საიდანაც სისტემა ეძებს პროგრამებს.
*/
