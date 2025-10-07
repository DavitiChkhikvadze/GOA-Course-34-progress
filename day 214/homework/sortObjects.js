// ობიექტების სორტირება order-ის მიხედვით, ხოლო თუ თანაბარია — id-ის კლებადობით
function sortObjects(arr) {
  return arr.sort((a, b) => {
    if (a.order === b.order) return b.id - a.id;
    return a.order - b.order;
  });
}

const items = [
  { id: 1, order: 2 },
  { id: 3, order: 1 },
  { id: 2, order: 2 },
];

console.log(sortObjects(items));
