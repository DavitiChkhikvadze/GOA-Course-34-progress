// process.argv არის Array ტიპის ობიექტი, სადაც ინახება პროგრამის გაშვებისას გადაცემული არგუმენტები.
console.log(process.argv);

// პირველ ორი ელემენტი ყოველთვის ასეთია:
// 1) node-ის მისამართი (მაგ: C:\Program Files\nodejs\node.exe)
// 2) მიმდინარე ფაილის მისამართი (მაგ: C:\project\argv.js)

// მესამე არგუმენტის ამოღება:
console.log("მესამე არგუმენტი:", process.argv[2]);
