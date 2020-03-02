const database = [

  {
    itemId: 6,
    image: 'vscode.png',
    demo: 'aouto_close.gif',
    url: 'https://marketplace.visualstudio.com/items?itemName=SimonSiefke.auto-rename-tag',
    title: 'Auto Rename Tag',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'When you rename one HTML/XML tag, automatically rename the paired HTML/XML tag',
    date: 2019.05
  },

  {
    itemId: 5,
    image: 'vscode.png',
    demo: 'trailing_spaces.png',
    url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
    title: 'Trailing Spaces',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'Highlight trailing spaces not to leave extra spaces',
    date: 2019.05
  },

  {
    itemId: 4,
    image: 'chrome.png',
    demo: 'sample.gif',
    url: 'https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob?hl=ja',
    title: 'PixelParallel by htmlBurger',
    categorys: [
      {
        id: 2,
        name: 'Google Chrom'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'HTML vs Design comparison tool for front-end developers that will help you code with ease',
    date: 2019.05
  },

  {
    itemId: 3,
    image: 'liveserver.png',
    demo: 'liveserver.gif',
    url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
    title: 'Live Server',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'live browser reload tool for front-end developers that will help you code effeciently ',
    date: 2019.05
  },

  {
    itemId: 2,
    image: 'chrome.png',
    demo: 'website_ip.png',
    url: 'https://chrome.google.com/webstore/detail/website-ip/ghbmhlgniedlklkpimlibbaoomlpacmk?hl=ja',
    title: 'Website IP',
    categorys: [
      {
        id: 2,
        name: 'Google Chrom'
      },
      {
        id: 3,
        name: 'IP'
      }
    ],
    text: 'Show website IP address on your screen',
    date: 2019.05
  },

  {
    itemId: 1,
    image: 'sousetree.jpeg',
    demo: 'sample.gif',
    url: 'https://www.sourcetreeapp.com/',
    title: 'Source Tree',
    categorys: [
      {
        id: 1,
        name: 'Git'
      }
    ],
    text: 'Git version control tool with GUI',
    date: 2019.05
  },
]

// カテゴリを取得
let getcategory = [];
database.forEach(el => {
  el.categorys.forEach(el => {
    getcategory.push(el);
  });
});

// 重複しているカテゴリを取り除く
const categorys = getcategory.filter((el, i, self) => self.findIndex(val => el.id === val.id) === i);


export default {
  fetch(){return database},
  find(id){
    return database.find(el => el.itemId === id)
  },
  findBycategory(id){
    return database.filter(el => el.categorys.find(category => category.id === id));
  },
  findByKeyword(val) {
    return database.filter(el => el.text.toUpperCase().includes(val) || el.title.toUpperCase().includes(val));
  },
  findCurrentPost() {return database.slice(0, 3);},
  asyncFind(id, callback) {
    return database.find(el => el.itemId === id);
  },
  getcategory() { return categorys; }
}