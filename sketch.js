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
}


function generate_spade(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite();
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
		card[i].x = 20 + i*100
		card[i].y = 30;
	}
	return card
}
function generate_clubs(cards){
	let card = []
	for (let i = 0; i < 13; i++){
		card[i] = new cards.Sprite();
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
		card[i].x = 20 + i*100
		card[i].y = 0;
	}
	return card
}

function draw() {
	background('green');

}
