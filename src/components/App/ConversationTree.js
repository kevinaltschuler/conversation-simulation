var end2 = [
	{text: '', response: '', score: 0}
]

var next3a = [
	{text: "lets get the phone", response: 'thank you', score: 10, next: end},
	{text: "you suck", response: 'were breaking up', score: -10, next: end}
]
var next2 = [
	{text: "it doesn't matter what they think, they love you regardless", response: 'I need you with me', score: 10, next: next3a},
	{text: 'just do it', response: 'okay...', score: 0, next: end}
]


var next1 = [
	{text: '', response: 'What will they think if they know I cant keep my family stable?', score: 0, next: next2}
]
var end = [
	{text: '', response: '', score: 0, next: end2}
]

var l4c1 = [
	{text: "I hate you and I'm leaving you", response: '', score: -30, next: end},
	{text: "He is so much hotter than me", response: '', score: -20, next: end}
]

//layer 3
var l3c1 = [
	{text: "Well maybe I don't WANT to think about how you feel!", response: '', score: -30, next: end},
	{text: "you NEVER think about how I feel", response: '', score: -20, next: end},
	{text: 'lets just talk about this tomorrow', response: '', score: -50, next: end},
]
var l3c2 = [
	{text: 'this relationship isn’t strong enough for us to raise kids', response: "what do you mean?", next: l3c9},
	{text: 'Maybe I could try...', response: 'you WILL try and it will be BEAUTIFUL', score: 50, next: end},
]

var l3c5 = [
	{text: 'I just wouldn’t feel comfortable. He isnt my son.', response: "... he is my son though", score: 5, next: l2c1},
	{text: "I mean, he's a reminder of travis", response: "You're JEALOUS?", score: -10, next: l4c1}
]

var l3c7 = [
	{text: 'he’s not my responsibility and i dont love you enough for this commitment', response: '', score: -30, next: end},
	{text: "You're right. What are our options?", response: '', score: 20, next: end},
]

var l3c9 = [

	{text: 'i dont love you anymore', response: '.   .   .', score: -10, next: end},
	{text: 'i dont want to commit to children already', response: 'I want you to try', score: 5, next: l3c2},

]
var l3c10 = [
	{text: "it's just such a big commitment", response: "I feel obligated as his mother", score: 5, next: l2c1},
	{text: 'OK LETS DO IT', response: 'YAY', score: 100, next: end},
]

var l3c17 = [
	{text: 'lets talk to them first', response: "I dont want them to know. It's embarrassing", score: 10, next: next1},
	{text: 'I could call Travis', response: "What could you change? He doesn't even want to talk to you", score: -5, next: end},
	{text: 'your sister?', response: "she has her own kids to look after", score: 0, next: l2c1},
]



//layer 2
var l2c1 = [
	{text: "I understand but he’s not my responsibility", response: "Maybe, but you need to think about how I feel!", next: l3c1},
	{text: "i'm just not ready to raise a son", response: "I know it’s a big commitment. but i think we can do this.", next: l3c2},
	{text: "Could anybody else could look after him?", score: 10, response: "I mean, I guess my parents could. But I haven't told them yet.", next: l3c17}
]
var l2c2 = [
	{text: 'I didn’t mean it that way', response: 'so what DID you mean?', score: -5, next: l3c5},
	{text: "I just don't think I'm ready for this", response: 'i feel obligated as his mother', score: 5, next: l2c1},
	{text: "Yeah, but he isn’t mine", response: 'I am half of this relationship you know!', score: -10, next: l3c7},
]
var l2c3 = [
	{text: 'I don’t think our relationship is strong enough for us to raise kids yet', response: 'what do you mean?', score: 5, next: l3c9},
	{text: 'i dont know if i can commit to this', response: "i love you and I think we could do this", score: 10, next: l3c10},
	{text: '... i think we could', response: 'YAY', score: 100, next: end},
]


//layer 1
var start = [
	{text: "I didn't enter this relationship wanting a kid", response: 'I feel obligated as his mother', score: -5, next: l2c1},
	{text: "I'm not sure how I feel about raising Travis' child", score: -10, response: "He's my son too!", next: l2c2},
	{text: 'Taking him in is the right thing to do', score: 5, response: 'do you think we could do it?', next: l2c3},
]

var intro7 = [
	{text: '', response: "I don't know what to do.", score: 0, next: start}
]
	
var intro6 = [
	{text: '', response: "she’s supporting him financially", score: 0, next: intro7}
]

var intro5 = [
	{text: '', response: 'Travis said she was threatening to leave', score: 0, next: intro6}
]

var intro4 = [
	{text: '', response: 'He told me his girlfriend doesnt want my son to live with them anymore', score: 0, next: intro5}
]

var intro3 = [
	{text: 'your ex?', response: "yeah", score: 0, next: intro4}
]

var intro2 = [
	{text: '', response: 'I got a call from Travis today', score: 0, next: intro3}
]

var intro1 = [
	{text: '', response: 'I have to talk to you', score: 0, next: intro2}
]

var intro = [
	{text: 'hi', response: 'hey', score: 0, next: intro1}
]


export default intro;