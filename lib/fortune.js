var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];
exports.getFortune = function() 
{
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};


/* Use global variable exports to if you want something to be visible outside of the module */