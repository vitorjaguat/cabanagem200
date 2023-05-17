const fs = require('fs');

let contentArr = [];
fs.readFile(
  '/Users/vitorbutkusaguiar/repos/cabanagem200/src/utils/prompts.txt',
  'utf8',
  (err, data) => {
    if (err) {
      console.error(err);
    }
    contentArr.push(data.split('\n'));
    // contentArr.push(data);
    console.dir(
      contentArr[0]
        .map((item) => {
          if (item.length > 3) {
            return item;
          }
        })
        .map((item) => {
          if (item !== undefined) {
            return item;
          }
        }),
      { maxArrayLength: null }
    );
  }
);

// fs.writeFile(
//   '/Users/vitorbutkusaguiar/repos/cabanagem200/src/utils/TEXT.txt',
//   contentArr,
//   (err) => {
//     if (err) console.error(err);
//   }
// );
