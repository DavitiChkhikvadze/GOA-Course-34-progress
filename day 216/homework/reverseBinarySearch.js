/**
 * Reverse Binary Search ფუნქცია კლებადობით დალაგებულ (Descending)
 * მასივში ელემენტის საპოვნელად.
 *
 * @param {number[]} arr - კლებადობით დალაგებული რიცხვების მასივი.
 * @param {number} target - საპოვნი მნიშვნელობა.
 * @returns {number} - ინდექსი, სადაც მოიძებნა მნიშვნელობა, ან -1 თუ ვერ მოიძებნა.
 */
function reverseBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // გამოვთვალოთ შუა ინდექსი
        let mid = Math.floor(left + (right - left) / 2);

        // 1. თუ შუა ელემენტი სამიზნეა, დავაბრუნოთ ინდექსი
        if (arr[mid] === target) {
            return mid;
        }

        // --- ცვლილება სტანდარტულ Binary Search-თან შედარებით ---

        // 2. თუ სამიზნე (target) შუა ელემენტზე დიდია:
        // კლებადობით დალაგებულ მასივში, ეს ნიშნავს, რომ სამიზნე
        // შუა ელემენტის *მარცხნივ* მდებარეობს, რადგან მარცხნივ უფრო დიდი
        // რიცხვებია.
        else if (arr[mid] < target) {
            right = mid - 1; // გადავდივართ მარცხენა ნახევარზე
        }

        // 3. თუ სამიზნე (target) შუა ელემენტზე მცირეა:
        // ეს ნიშნავს, რომ სამიზნე შუა ელემენტის *მარჯვნივ* მდებარეობს,
        // რადგან მარჯვნივ უფრო მცირე რიცხვებია.
        else { // arr[mid] > target
            left = mid + 1; // გადავდივართ მარჯვენა ნახევარზე
        }
    }

    // თუ ვერ მოიძებნა
    return -1;
}

// --- მაგალითის გამოყენება ---

const descendingArray = [91, 72, 56, 38, 23, 16, 12, 8, 5, 2];
const targetValue1 = 38;
const targetValue2 = 50; // არ არსებობს

const index1 = reverseBinarySearch(descendingArray, targetValue1);
const index2 = reverseBinarySearch(descendingArray, targetValue2);

console.log(`მნიშვნელობა ${targetValue1} მოიძებნა ინდექსზე: ${index1}`); // შედეგი: 3
console.log(`მნიშვნელობა ${targetValue2} მოიძებნა ინდექსზე: ${index2}`); // შედეგი: -1