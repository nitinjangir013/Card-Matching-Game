let randomPlaces = [];
let randomPlacesCounter = 0;
let imgPlacement = [];
let imagesOpened = [];


function getRandomPlaces()
{
while(randomPlacesCounter<12)
	{
		let rValue = parseInt(Math.random()*100);
		// console.log("Random Value is "+rValue);
		// console.log("randomPlaces array containg value : "+randomPlaces.includes(rValue));
		// console.log("Before inserting value array length is "+randomPlaces.length);
		if((rValue>=0 && rValue<12) && !randomPlaces.includes(rValue) )
		{
		  	randomPlaces[randomPlacesCounter] = rValue;
			randomPlacesCounter++;
		}
	}
}
getRandomPlaces();
console.log(randomPlaces);

const images = document.getElementsByClassName('images');

// Array Images Address

const imagesContainer = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVIDQ2OOYGH70YyIpbtzPJKztkbZWTIxZHB7PIS0fc_5oCJ9FPDwagr-ZuoXeAl5ZVqk&usqp=CAU",
"https://www.jiomart.com/images/product/600x600/590000070/pineapple-queen-1-pc-approx-700-g-1200-g-product-images-o590000070-p590000070-0-202203170357.jpg",
"https://media.istockphoto.com/photos/orange-picture-id185284489?b=1&k=20&m=185284489&s=170667a&w=0&h=a_fCXMop7ZX1V1yoQDYQeIwZTwIei3UjOmmRItszleY=",
"https://previews.123rf.com/images/usersam2007/usersam20071205/usersam2007120500004/13581958-single-pomegranate-fruit-isolated-on-white-background.jpg",
"https://cdn.shopify.com/s/files/1/1278/1015/products/wooden-individual-fruit-and-vegetables-pear-toyslink-the-creative-toy-shop.jpg?v=1579517043",
"https://previews.123rf.com/images/usersam2007/usersam20071802/usersam2007180200020/96654339-single-ripe-red-apple-fruit-with-green-leaf-isolated-on-white-background.jpg"];


// Show images Tag

images[randomPlaces[0]].innerHTML = '<img class="img" src="'+imagesContainer[0]+'">';
images[randomPlaces[1]].innerHTML = '<img class="img" src="'+imagesContainer[0]+'">';
images[randomPlaces[2]].innerHTML = '<img class="img" src="'+imagesContainer[1]+'">';
images[randomPlaces[3]].innerHTML = '<img class="img" src="'+imagesContainer[1]+'">';
images[randomPlaces[4]].innerHTML = '<img class="img" src="'+imagesContainer[2]+'">';
images[randomPlaces[5]].innerHTML = '<img class="img" src="'+imagesContainer[2]+'">';
images[randomPlaces[6]].innerHTML = '<img class="img" src="'+imagesContainer[3]+'">';
images[randomPlaces[7]].innerHTML = '<img class="img" src="'+imagesContainer[3]+'">';
images[randomPlaces[8]].innerHTML = '<img class="img" src="'+imagesContainer[4]+'">';
images[randomPlaces[9]].innerHTML = '<img class="img" src="'+imagesContainer[4]+'">';
images[randomPlaces[10]].innerHTML = '<img class="img" src="'+imagesContainer[5]+'">';
images[randomPlaces[11]].innerHTML = '<img class="img" src="'+imagesContainer[5]+'">';
imgPlacement[0] = [randomPlaces[0],randomPlaces[1]];
imgPlacement[1] = [randomPlaces[2],randomPlaces[3]];
imgPlacement[2] = [randomPlaces[4],randomPlaces[5]];
imgPlacement[3] = [randomPlaces[6],randomPlaces[7]];
imgPlacement[4] = [randomPlaces[8],randomPlaces[9]];
imgPlacement[5] = [randomPlaces[10],randomPlaces[11]];


console.log("Image Placement is : ");
console.log(imgPlacement);
const img = document.getElementsByClassName('img');
const score = document.getElementsByClassName('score_div')[0];

var isOpen = false;
var result = 0;
score.innerText = 'Score : '+result+'/'+imagesContainer.length;

function clicked(picIndex)
{
	startTime();
	console.log("clicked on "+picIndex);
	img[picIndex].style.transform = 'rotateY(0deg)';
	imagesOpened[imagesOpened.length] = picIndex;

    console.log("Match is "+match(picIndex));

    if(imagesOpened.length == 2)
    {
    	if(match(imagesOpened[0]) == imagesOpened[1])
    	{
    		console.log("matched");
    		isOpen = true;
    		result++;
    		score.innerText = 'Score : '+result+'/'+imagesContainer.length;
    		imagesOpened = [];
    	}
    	else
    	{
    		console.log("Not matched");
    		isOpen = false;
    		result--;
    		score.innerText = 'Score : '+result+'/'+imagesContainer.length;
    		flipBack(0,1);
    		
    	}
    	
    }
}

function flipBack(index1,index2)
{
	setTimeout(function()
	{
    	img[imagesOpened[index1]].style.transform = 'rotateY(90deg)';
    	img[imagesOpened[index2]].style.transform = 'rotateY(90deg)';
    	imagesOpened = [];
	},500);
}

function match(place)
{

console.log("imagesOpened array is ");

console.log(imagesOpened);

	for(i=0;i<imgPlacement.length;i++)
	{
		if(place === imgPlacement[i][0])
		{
			return imgPlacement[i][1];
		}
		else if(place === imgPlacement[i][1])
		{
			return imgPlacement[i][0];
		}
	}

}

// Game Timer
var min = 0;
var sec = 0;
var stoptime = true;
const timer = document.getElementsByClassName('timer')[0];


function startTime() {
	if (stoptime == true) {
		stoptime = false;
	}
}

setInterval(function() {
	if (stoptime == false) {
		sec = parseInt(sec);
		min = parseInt(min);
		sec=sec+1;
		if (sec == 60 || sec == 0) {
			min=min+1;
			sec=0;
		}
		if (sec<10) {
			sec='0'+sec;
		}
		if (min<10 || min == 0) {
			min='0'+min;
		}
		timer.innerHTML = min + ':' + sec;
	}
},1000);