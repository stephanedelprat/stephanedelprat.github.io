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
    return (256+number).toString(2).replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
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
        let number = random(-127, -10);
        let binary = complement2Str(number);
        question.innerHTML = binary + ' =<br><span class="response hidden-response">' + number + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base10-2-2-complement div.question'), function (question) {
        let number = random(-127, -10);
        let binary = complement2Str(number);
        question.innerHTML = number + ' =<br><span class="response hidden-response">' + binary + '</span>';
        question.innerHTML = number + ' =<br><span class="response hidden-response">' + binary + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base16-10 div.question'), function (question) {
        let number = random(16, 255);
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
    Array.prototype.filter.call(document.querySelectorAll('body.base2-mult div.question'), function (question) {
        let number1 = random(8, 15);
        let number2 = random(2, 7);
        let binary1 = binaryStr(number1);
        let binary2 = binaryStr(number2);
        question.innerHTML = binary1 + ' * ' + binary2 + ' =<br><span class="response hidden-response">' + binaryStr(number1 * number2) + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.base2-sub div.question'), function (question) {
        let number1 = random(48, 245);
        let number2 = random(10, number1);
        let binary1 = binaryStr(number1);
        let binary2 = binaryStr(number2);
        question.innerHTML = binary1 + ' - ' + binary2 + ' =<br><span class="response hidden-response">' + binaryStr(number1 - number2) + '</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.how-many-bits div.question'), function (question) {
        let number1 = random(2, 8);
        let number2 = random(2**(number1-1), 2**number1-1);
        question.innerHTML = 'Le nombre ' + number2 + ' ?<br><span class="response hidden-response">' + number1 + ' bits</span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.bigger-int div.question'), function (question) {
        let number1 = random(4, 16);
        let answer = '2<sup>'+number1+'</sup> - 1 = '+(2**number1-1);
        question.innerHTML = 'Sur ' + number1 + ' bits ?<br><span class="response hidden-response">' + answer + ' </span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.bigger-smaller-int div.question'), function (question) {
        let number1 = random(4, 16);
        let answer = '-2<sup>'+(number1-1)+'</sup> = '+(2**(number1-1))+' à 2<sup>'+(number1-1)+'</sup> - 1 = '+(2**(number1-1)-1);
        question.innerHTML = 'Sur ' + number1 + ' bits ?<br><span class="response hidden-response">' + answer + ' </span>';
    });
    Array.prototype.filter.call(document.querySelectorAll('body.range div.question'), function (question) {
        let rand = random(1, 8);
        let start = random(-2, 2);
        let end = random(4, 8);
        let step = random(1, 3);
        let range;
        if (rand === 1) {
            range = 'range('+end+')';
            start = 0;
            step = 1;
        } else if (rand === 2) {
            range = 'range(-'+end+')';
            end = -end;
            start = 0;
            step = 1;
        } else if (rand === 3) {
            range = 'range('+start+', '+end+')';
            step = 1;
        } else if (rand === 4) {
            [start, end] = [end, start];
            step = -1;
            range = 'range('+start+', '+end+', '+step+')';
        } else {
            range = 'range('+start+', '+end+', '+step+')';
        }
        let answer = '';
        let count = 0;
        if (step > 0) {
            for (let i = start; i < end; i += step) {
                answer += i + '<br>';
                count++
            }
        } else {
            for (let i = start; i > end; i += step) {
                answer += i + '<br>';
                count++
            }
        }
        question.innerHTML = 'for i in '+range+': print(i) <br><span class="response hidden-response">' + answer + count+' tours</span>';
    });
}
init();
document.getElementById('show').addEventListener("click", function() {
    Array.prototype.filter.call(document.getElementsByClassName('response'), function(question) {
        question.classList.remove('hidden-response');
    });
});
document.getElementById('refresh').onclick = function() {
    init();
}
