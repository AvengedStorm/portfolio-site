let wordArr = ['good', 'bad', 'great', 'awaful', 'the best', 'the worst'];
let timeArr = ['hour', 'day', 'week', 'month', 'year', 'decade'];
let timePointer = timeArray[Math.floor(Math.random() * 6)];
let wordPointer = wordArray[Math.floor(Math.random() * 6)];

let ansOutput = () => {
	console.log(`You're going to have ${wordPointer} luck for the next ${timePointer}.`
};


console.log(ansOutput());