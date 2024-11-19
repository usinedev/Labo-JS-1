const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
function validate() {
    event.preventDefault()
    let badAnswer = 0
    const info = document.getElementById('pInfoBottom')
    for (i = 1 ; i < 6 ; i++) {
        const result = document.querySelector('input[name="q'+i+'"]:checked')
        const pAnswer = document.getElementById('answerQ'+i)
        const questionBox = document.getElementById('question'+i)
        if (result.value == responses[i - 1]) {
            questionBox.classList.add('good')
            pAnswer.textContent = 'Bonne réponse !'
        }
        else {
            questionBox.classList.add('bad')
            pAnswer.textContent = 'Mauvaise réponse !'
            badAnswer+=1
        }
    }    
    if (badAnswer == 0) {
        info.innerHTML = '<p>Wow quel résultat ! '+emojis[1]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p>'
    }
    else if (badAnswer == 5) {
        info.innerHTML = '<p>'+emojis[3]+' Frérot t\'es éclaté au sol '+emojis[4]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p><p>Couz rééssaie fais un truc par pitié</p>'
    }
    else {
        info.innerHTML = '<p>'+emojis[2]+' Il reste quelques erreurs '+emojis[3]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p><p>Retentez une autre réponse dans les cases rouges, puis re-validez !</p>'
    }
    info.classList.add('column')
}