random = function(size) {
    return Math.floor(Math.random()*size);
}
init = function() {
    Array.prototype.filter.call(document.getElementsByClassName('question1'), function (question) {
        let number = 56 + random(200);
        let binary = number.toString(2);
        question.innerHTML = binary + '<br><span class="response hidden-response">Réponse: ' + number + '</span>';
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
