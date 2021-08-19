var cards = document.getElementsByClassName('link-card');
for (var i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        cardUrl = this.href
        location.url = cardUrl;
    });
};