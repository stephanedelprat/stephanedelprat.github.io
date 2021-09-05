random = function(start, end) {
    return start + Math.floor(Math.random() * (end - start + 1));
}
binaryStr = function(number) {
    return '('+number.toString(2).replace(/\B(?=(\d{4})+(?!\d))/g, ' ')+')<sub>2</sub>';
}
hexaStr = function(number) {
    return '('+number.toString(16).toUpperCase()+')<sub>16</sub>';
}
decimalStr = function(number) {
    return '('+number+')<sub>10</sub>';
}
complement2Str = function(number) {
    return binaryStr(256+number);
}
init = function() {
    Array.prototype.filter.call(document.querySelectorAll('body.base2-10 div.question'), function (question) {
        let number = random(48, 255);
        let binary = binaryStr(number);
        question.innerHTML = binary + ' =<br><span class="response hidden-response">' + decimalStr(number) + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base10-2 div.question'), function (question) {
        let number = random(48, 255);
        let binary = binaryStr(number);
        question.innerHTML = decimalStr(number) + ' =<br><span class="response hidden-response">' + binary + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-10-2-complement div.question'), function (question) {
        let number = random(-128, -10);
        let binary = complement2Str(number);
        question.innerHTML = binary + ' =<br><span class="response hidden-response">' + number + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base10-2-2-complement div.question'), function (question) {
        let number = random(-128, -10);
        let binary = complement2Str(number);
        question.innerHTML = number + ' =<br><span class="response hidden-response">' + binary + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base16-10 div.question'), function (question) {
        let number = random(-128, -10);
        let hexa = hexaStr(number);
        question.innerHTML = hexa + ' =<br><span class="response hidden-response">' + decimalStr(number) + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base10-16 div.question'), function (question) {
        let number = random(16, 255);
        let hexa = hexaStr(number);
        question.innerHTML = decimalStr(number) + ' =<br><span class="response hidden-response">' + hexa + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base16-2 div.question'), function (question) {
        let number = random(16, 2**16 - 1);
        let binary = binaryStr(number);
        let hexa = hexaStr(number);
        question.innerHTML = hexa + ' =<br><span class="response hidden-response">' + binary + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-16 div.question'), function (question) {
        let number = random(16, 2**16 - 1);
        let binary = binaryStr(number);
        let hexa = hexaStr(number);
        question.innerHTML = binary + ' =<br><span class="response hidden-response">' + hexa + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-add div.question'), function (question) {
        let number1 = random(10, 245);
        let number2 = random(10, 255 - number1);
        let binary1 = binaryStr(number1);
        let binary2 = binaryStr(number2);
        question.innerHTML = binary1 + ' + ' + binary2 + ' =<br><span class="response hidden-response">' + binaryStr(number1 + number2) + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-sub div.question'), function (question) {
        let number1 = random(48, 245);
        let number2 = random(10, number1);
        let binary1 = binaryStr(number1);
        let binary2 = binaryStr(number2);
        question.innerHTML = binary1 + ' - ' + binary2 + ' =<br><span class="response hidden-response">' + binaryStr(number1 - number2) + '</span>';
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
