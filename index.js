// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

const cards = ['Grandparents', 'Parents', 'siblings'];

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
     debugger;
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    
    }
    return messages;
}

const count = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function countDown(count) {
    while (count >= 0) {
        console.log(count--)
        
    }
}