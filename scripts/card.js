var initialCardData = function() {
};

initialCardData.prototype = function() {
	var initialCards = [{
        "cardNumber":"461253932",
        "amount":20,
        "bonusPoints":60,
        "expireDate":"2013/12/06"
    },{
        "cardNumber":"723128745",
        "amount":76,
        "bonusPoints":22,
        "expireDate":"2014/10/16"
    },{
        "cardNumber":"912472185",
        "amount":104,
        "bonusPoints":56,
        "expireDate":"2014/11/24"
    }],

	getInitialCardsData = function() {
		return JSON.stringify(initialCards);
	};
    
	return {
		getInitialCardsData:getInitialCardsData,
	};
}();

var initialBeerData = function() {
};

initialBeerData.prototype = function() {
	var initialBeers = [{
        "cardNumber":"prueba1",
        "amount":20,
        "bonusPoints":90,
        "expireDate":"2021/12/06"
    },{
        "cardNumber":"721128775",
        "amount":176,
        "bonusPoints":50,
        "expireDate":"2022/10/16"
    },{
        "cardNumber":"992442115",
        "amount":104,
        "bonusPoints":5,
        "expireDate":"2045/11/24"
    }],

	getInitialBeersData = function() {
		return JSON.stringify(initialBeers);
	};
    
	return {
		getInitialBeersData:getInitialBeersData,
	};
}();