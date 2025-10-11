// 1) fs მოდულის მოთხოვნა
const fs = require('fs');

/**
 * 4) ფუნქცია readFileContent(filePath)
 * იღებს ფაილის გზას და კონსოლში გამოაქვს შიგთავსი ასინქრონულად (fs.readFile-ის გამოყენებით).
 * @param {string} filePath - ფაილის გზა.
 */
function readFileContent(filePath) {
    // fs.readFile იღებს სამ არგუმენტს:
    // 1. ფაილის გზა
    // 2. დაშიფვრა (encoding) - 'utf8' ტექსტის სწორად წასაკითხად
    // 3. callback ფუნქცია, რომელიც გამოიძახება ოპერაციის დასრულების შემდეგ (error, data)
    fs.readFile(filePath, 'utf8', (error, data) => {
        // თუ შეცდომა მოხდა (მაგალითად, ფაილი არ არსებობს)
        if (error) {
            console.error(`შეცდომა ფაილის წაკითხვისას (${filePath}):`, error.message);
            return;
        }
        // თუ ოპერაცია წარმატებით დასრულდა
        console.log(`\n--- ფაილის შიგთავსი (${filePath}): ---`);
        console.log(data);
        console.log('----------------------------------------');
    });
    // ასინქრონულობის გამო ეს ხაზი შეიძლება შესრულდეს ფაილის წაკითხვამდე!
    console.log(`ფაილის წაკითხვის მოთხოვნა გაიგზავნა: ${filePath} (ასინქრონულად)`);
}

/**
 * 5) ფუნქცია writeToFile(filePath, content)
 * იღებს ფაილის გზას და ტექსტს, და წერს მას ფაილში ასინქრონულად (fs.writeFile-ის გამოყენებით).
 * თუ ფაილი არ არსებობს, ქმნის ახალს.
 * @param {string} filePath - ფაილის გზა.
 * @param {string} content - ჩასაწერი ტექსტი.
 * @param {function} callback - ფუნქცია, რომელიც გამოიძახება ჩაწერის დასრულების შემდეგ.
 */
function writeToFile(filePath, content, callback) {
    // fs.writeFile ცვლის ფაილის მთლიან შიგთავსს.
    // თუ ფაილი არ არსებობს, შექმნის. თუ არსებობს, გადაწერს.
    fs.writeFile(filePath, content, 'utf8', (error) => {
        if (error) {
            console.error(`შეცდომა ფაილში ჩაწერისას (${filePath}):`, error.message);
            return;
        }
        console.log(`\n✅ წარმატებით ჩაიწერა ფაილში: ${filePath}`);
        if (callback) {
            callback(); // ვეძახით callback-ს, თუ გადაცემულია
        }
    });
}

/**
 * 7) ფაილში ტექსტის დამატება (append)
 * იყენებს fs.appendFile ფუნქციას, რომელიც არ ანაცვლებს, არამედ ამატებს ტექსტს ფაილის ბოლოში.
 * @param {string} filePath - ფაილის გზა.
 * @param {string} data - დასამატებელი ტექსტი.
 * @param {function} callback - ფუნქცია, რომელიც გამოიძახება დამატების დასრულების შემდეგ.
 */
function appendToFile(filePath, data, callback) {
    // \n ახალ ხაზზე გადასასვლელად
    const contentToAppend = `\n${data}`;
    fs.appendFile(filePath, contentToAppend, 'utf8', (error) => {
        if (error) {
            console.error(`შეცდომა ფაილზე დამატებისას (${filePath}):`, error.message);
            return;
        }
        console.log(`✅ წარმატებით დაემატა ტექსტი ფაილს: ${filePath}`);
        if (callback) {
            callback();
        }
    });
}


// --- 6), 7) და 8) პუნქტების შესრულება ---

const fileName = 'text.txt';

// 6) მომხმარებლის არგუმენტის მიღება
// process.argv არის მასივი, რომელიც შეიცავს ბრძანების ხაზის არგუმენტებს.
// [0] არის node-ის გზა, [1] არის ფაილის გზა, [2] არის პირველი არგუმენტი.
const cliArgument = process.argv[2];

if (!cliArgument) {
    console.log("⚠️ გთხოვთ, გაუშვათ პროგრამა არგუმენტით. მაგალითად: node app.js 'პირველი ტექსტი'");
    // თუ არგუმენტი არ არის, ვამთავრებთ პროგრამას
    process.exit(1);
}

// 6) არგუმენტის ჩაწერა text.txt ფაილში
const initialContent = `არგუმენტი: ${cliArgument}`;
console.log(`დაწყება: ჩაწერა ფაილში: ${fileName}`);

// writeToFile ფუნქციას გადავცემთ callback-ს, რათა დავრწმუნდეთ, რომ ჩაწერა დასრულდა, სანამ დავამატებთ ტექსტს.
writeToFile(fileName, initialContent, () => {
    // 7) ამ ფაილში სხვა რაიმე ტექსტის დამატება
    const textToAppend = "ეს არის დამატებითი ტექსტი, რომელიც appendFile-ით ჩაიწერა.";

    appendToFile(fileName, textToAppend, () => {
        // 8) შემდეგ წაიკითხეთ ეს ფაილი.
        // წაკითხვის ფუნქციას ვეძახით მხოლოდ დამატების შემდეგ.
        readFileContent(fileName);
    });
});