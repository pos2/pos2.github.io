let myImage = document.querySelector('img');
let pic1 = 'images/firefox2.png';
let pic2 = 'images/firefox-icon.png';
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src',pic1);
	}else{
		myImage.setAttribute('src',pic2);
	}
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;