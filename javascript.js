random = function(start, end) {
    return start + Math.floor(Math.random() * (end - start + 1));
}
init = function() {
    Array.prototype.filter.call(document.querySelectorAll('body.base2-10 div.question'), function (question) {
        let number = random(48, 255);
        let binary = number.toString(2);
        question.innerHTML = binary + '<br><span class="response hidden-response">Réponse: ' + number + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base10-2 div.question'), function (question) {
        let number = random(48, 255);
        let binary = number.toString(2);
        question.innerHTML = number + '<br><span class="response hidden-response">Réponse: ' + binary + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-add div.question'), function (question) {
        let number1, number2;
        do {
            number1 = random(10, 245);
            number2 = random(10, 245);
        } while (number1 + number2 > 255)
        let binary1 = number1.toString(2);
        let binary2 = number2.toString(2);
        question.innerHTML = binary1 + ' + ' + binary2 + '<br><span class="response hidden-response">Réponse: ' + (number1 + number2).toString(2) + '</span>';
    });
}
init();
document.getElementById('show').addEventListener("click", function() {
    Array.prototype.filter.call(document.getElementsByClassName('response'), function(question) {
        console.log('a');
        question.classList.remove('hidden-response');
    });
});
document.getElementById('refresh').onclick = function() {
    init();
}
