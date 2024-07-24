const CARD_LIST = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const CARD_COLOR = ["red", "black"]

const CLUBS = {
	"ace": "assets/Pixel Playing Cards Pack/ace_clubs.png",
	"1": "assets/Pixel Playing Cards Pack/1_clubs.png",
	"2": "assets/Pixel Playing Cards Pack/2_clubs.png",
	"3": "assets/Pixel Playing Cards Pack/2_clubs.png",
	"4": "assets/Pixel Playing Cards Pack/3_clubs.png",
	"5": "assets/Pixel Playing Cards Pack/4_clubs.png",
	"6": "assets/Pixel Playing Cards Pack/5_clubs.png",
	"7": "assets/Pixel Playing Cards Pack/6_clubs.png",
	"8": "assets/Pixel Playing Cards Pack/7_clubs.png",
	"9": "assets/Pixel Playing Cards Pack/9_clubs.png",
	"10": "assets/Pixel Playing Cards Pack/10_clubs.png",
	"jack": "assets/Pixel Playing Cards Pack/jack_clubs.png",
	"queen": "assets/Pixel Playing Cards Pack/queen_clubs.png",
	"king": "assets/Pixel Playing Cards Pack/king_clubs.png"
}

const DIAMONDS = {
	"ace": "assets/Pixel Playing Cards Pack/ace_diamonds.png",
	"1": "assets/Pixel Playing Cards Pack/1_diamonds.png",
	"2": "assets/Pixel Playing Cards Pack/2_diamonds.png",
	"3": "assets/Pixel Playing Cards Pack/2_diamonds.png",
	"4": "assets/Pixel Playing Cards Pack/3_diamonds.png",
	"5": "assets/Pixel Playing Cards Pack/4_diamonds.png",
	"6": "assets/Pixel Playing Cards Pack/5_diamonds.png",
	"7": "assets/Pixel Playing Cards Pack/6_diamonds.png",
	"8": "assets/Pixel Playing Cards Pack/7_diamonds.png",
	"9": "assets/Pixel Playing Cards Pack/9_diamonds.png",
	"10": "assets/Pixel Playing Cards Pack/10_diamonds.png",
	"jack": "assets/Pixel Playing Cards Pack/jack_diamonds.png",
	"queen": "assets/Pixel Playing Cards Pack/queen_diamonds.png",
	"king": "assets/Pixel Playing Cards Pack/king_diamonds.png"
}

const SPADES = {
	"ace": "assets/Pixel Playing Cards Pack/ace_spades.png",
	"1": "assets/Pixel Playing Cards Pack/1_spades.png",
	"2": "assets/Pixel Playing Cards Pack/2_spades.png",
	"3": "assets/Pixel Playing Cards Pack/2_spades.png",
	"4": "assets/Pixel Playing Cards Pack/3_spades.png",
	"5": "assets/Pixel Playing Cards Pack/4_spades.png",
	"6": "assets/Pixel Playing Cards Pack/5_spades.png",
	"7": "assets/Pixel Playing Cards Pack/6_spades.png",
	"8": "assets/Pixel Playing Cards Pack/7_spades.png",
	"9": "assets/Pixel Playing Cards Pack/9_spades.png",
	"10": "assets/Pixel Playing Cards Pack/10_spades.png",
	"jack": "assets/Pixel Playing Cards Pack/jack_spades.png",
	"queen": "assets/Pixel Playing Cards Pack/queen_spades.png",
	"king": "assets/Pixel Playing Cards Pack/king_spades.png"
}

const HEARTS= {
	"ace": "assets/Pixel Playing Cards Pack/ace_hearts.png",
	"1": "assets/Pixel Playing Cards Pack/1_hearts.png",
	"2": "assets/Pixel Playing Cards Pack/2_hearts.png",
	"3": "assets/Pixel Playing Cards Pack/2_hearts.png",
	"4": "assets/Pixel Playing Cards Pack/3_hearts.png",
	"5": "assets/Pixel Playing Cards Pack/4_hearts.png",
	"6": "assets/Pixel Playing Cards Pack/5_hearts.png",
	"7": "assets/Pixel Playing Cards Pack/6_hearts.png",
	"8": "assets/Pixel Playing Cards Pack/7_hearts.png",
	"9": "assets/Pixel Playing Cards Pack/9_hearts.png",
	"10": "assets/Pixel Playing Cards Pack/10_hearts.png",
	"jack": "assets/Pixel Playing Cards Pack/jack_hearts.png",
	"queen": "assets/Pixel Playing Cards Pack/queen_hearts.png",
	"king": "assets/Pixel Playing Cards Pack/king_hearts.png"
}


let spots, spot1, spot2, spot3, spot4, spot5, spot6, spot7, spotA1, spotA2, spotA3, spotA4;
let cards;
let cards_red, card_black;
let diamonds, spades, hearts, clubs;
let cell1, cell2, cell3, cell4, cell5, cell6, cell7;

function setup() {
	new Canvas(1315, 640);
	spots = new Group();
	spots.color = "grey"
	spot1 = new spots.Sprite(70, 200, 60, 84, 'n');
	spot2 = new spots.Sprite(140, 200, 60, 84, 'n');
	spot3 = new spots.Sprite(210, 200, 60, 84, 'n');
	spot4 = new spots.Sprite(280, 200, 60, 84, 'n');
	spot5 = new spots.Sprite(350, 200, 60, 84, 'n');
	spot6 = new spots.Sprite(420, 200, 60, 84, 'n');
	spot7 = new spots.Sprite(490, 200, 60, 84, 'n');
	spotA1 = new spots.Sprite(280, 100, 60, 84, 'n');
	spotA2 = new spots.Sprite(350, 100, 60, 84, 'n');
	spotA3 = new spots.Sprite(420, 100, 60, 84, 'n');
	spotA4 = new spots.Sprite(490, 100, 60, 84, 'n');
	cards = new Group();
	clubs = generate_clubs(cards);
	spades = generate_spade(cards);
	hearts = generate_heart(cards)
	diamonds = generate_diamonds(cards);
	cell1 = generate_first_cell();
	cell2 = generate_second_cell();
	cell3 = generate_third_cell();
	cell4 = generate_fourth_cell();
	cell5 = generate_fifth_cell();
	cell6 = generate_sixth_cell();
	cell7 = generate_senventh_cell();
	render_cell();
	console.log(cell2[0]);
}


function generate_spade(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite(280,100,60,84, 'n');
		if (i == 0){
			card[i].name = "ace";
		}
		else if (i == 10) {
			card[i].name = "jack";
		}
		else if (i == 11){
			card[i].name = "queen";
		}
		else if (i == 12){
			card[i].name = "king";
		}
		else{
			card[i].name = i+1;
		}
		card[i].fliped = false;
		card[i].image = SPADES[card[i].name];

	}
	return card
}
function generate_clubs(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite(350, 100, 60, 84, 'n');
		if (i == 0){
			card[i].name = "ace";
		}
		else if (i == 10) {
			card[i].name = "jack";
		}
		else if (i == 11){
			card[i].name = "queen";
		}
		else if (i == 12){
			card[i].name = "king";
		}
		else{
			card[i].name = i+1;
		}
		card[i].fliped = false;
		card[i].image = CLUBS[card[i].name];
	}
	return card
}
function generate_heart(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite(420, 100, 60, 84, 'n');
		if (i == 0){
			card[i].name = "ace";
		}
		else if (i == 10) {
			card[i].name = "jack";
		}
		else if (i == 11){
			card[i].name = "queen";
		}
		else if (i == 12){
			card[i].name = "king";
		}
		else{
			card[i].name = i+1;
		}
		card[i].fliped = false;
		card[i].image = HEARTS[card[i].name];
	}
	return card
}
function generate_diamonds(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite(490,100,60,84,'n');
		if (i == 0){
			card[i].name = "ace";
		}
		else if (i == 10) {
			card[i].name = "jack";
		}
		else if (i == 11){
			card[i].name = "queen";
		}
		else if (i == 12){
			card[i].name = "king";
		}
		else{
			card[i].name = i+1;
		}
		card[i].fliped = false;
		card[i].image = DIAMONDS[card[i].name];
	}
	return card
}

function generate_first_cell(){
	let index = Math.floor(Math.random() * 13);
	clubs[index].x = 70;
	clubs[index].y = 200;
	console.log(clubs[index]);
	console.log("hello");
	return clubs[index];
}

function generate_second_cell(){
	let cell = []
	for (let i=0; i<2; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 140;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 140;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 140;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 140;
			cell[i].y = 200+i*10;
			
		}
		if (i == 0){
			cell[i].fliped = true;
		}
	}
	return cell;
}

function generate_third_cell(){
	let cell = []
	for (let i=0; i<3; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 210;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 210;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 210;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 210;
			cell[i].y = 200+i*10;
			
		}
		if (i < 3){
			cell[i].fliped = true;
		}
	}
	return cell;
}

function generate_fourth_cell(){
	let cell = []
	for (let i=0; i<4; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 280;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 280;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 280;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 280;
			cell[i].y = 200+i*10;
			
		}
		if (i < 4){
			cell[i].fliped = true;
		}
	}
	return cell;
}

function generate_fifth_cell(){
	let cell = []
	for (let i=0; i<5; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 350;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 350;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 350;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 350;
			cell[i].y = 200+i*10;
			
		}
		if (i < 5){
			cell[i].fliped = true;
		}
	}
	return cell;
}

function generate_sixth_cell(){
	let cell = []
	for (let i=0; i<6; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 420;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 420;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 420;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 420;
			cell[i].y = 200+i*10;
			
		}
		if (i < 6){
			cell[i].fliped = true;
		}
	}
	return cell;
}

function generate_senventh_cell(){
	let cell = []
	for (let i=0; i<7; i++){
		let choix = Math.floor(Math.random() * 4);
		let index = Math.floor(Math.random() * 13);
		if (choix == 0){
			cell[i] = clubs[index]
			cell[i].x = 490;
			cell[i].y = 200+i*10;
		}
		if (choix == 1){
			cell[i] = spades[index]
			cell[i].x = 490;
			cell[i].y = 200+i*10;
		}
		if (choix == 2){
			cell[i] = hearts[index]
			cell[i].x = 490;
			cell[i].y = 200+i*10;
		}
		if (choix == 3){
			cell[i] = diamonds[index]
			cell[i].x = 490;
			cell[i].y = 200+i*10;
			
		}
		if (i < 7){
			cell[i].fliped = true;
		}
	}
	return cell;
}


function render_cell(){
	// cell 2
	if (cell2[0].fliped == true){
		cell2[0].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
	}
	// cell 3
	for (let i = 0; i<2; i++){
		if (cell3[i].fliped == true){
			cell3[i].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
		}
	}
	// cell 4
	for (let i = 0; i<3; i++){
		if (cell4[i].fliped == true){
			cell4[i].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
		}
	}
	// cell 5
	for (let i = 0; i<4; i++){
		if (cell5[i].fliped == true){
			cell5[i].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
		}
	}
	// cell 6
	for (let i = 0; i<5; i++){
		if (cell6[i].fliped == true){
			cell6[i].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
		}
	}
	// cell 7
	for (let i = 0; i<6; i++){
		if (cell7[i].fliped == true){
			cell7[i].image = "assets/Pixel Playing Cards Pack/back_black_basic.png";
		}
	}
}

function draw() {
	background('green');

}
