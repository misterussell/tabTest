var tabs = document.querySelectorAll('.tabs');
var textArea = document.querySelector('.text');
// var header = document.querySelectorAll('.header');

//TAB FOR EACH TEXT BELOW
// var headerName = ['Red','Blue','Green'];
var tabText = ['Red Wedding in the heat of the sahara. The bedouin tents scattered across the dunes. Dates and snakes centers of attention for the many gold clad guests.' , 'Blue Wedding in the sea with the beasts of the depths. Deep in a trench, the cool waters team with mer people and small blinking fish. Only sushi at this wedding buffet.' , 'Green Wedding with fairies and tree people, and ents alike. Running around under the Moon and the stars. Enjoy life.'];

//CONTENT update variables
var showContent = tabText[0];
textArea.textContent = showContent;
var hashUpdate = document.location.hash;

//TEST validations
// console.log(tabs);
// console.log(tabText);
// console.log(hashUpdate);
function clickHandler(e) {
  tabClicked = e.target.id - 1;
  showContent = tabText[tabClicked];
  textArea.textContent = showContent;
  hashUpdate = 'tab: '+ e.target.id;
  //PROOF hash update
  // console.log(hashUpdate);
  //PROOF CLICK
  // console.log('click');
}

for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', clickHandler);
}
