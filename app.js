const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
function validate() {
    event.preventDefault()
    let badAnswer = 0   //On compte les mauvaises réponses pour l'affichage final
    const info = document.getElementById('pInfoBottom') //Div contenant l'affiche final
    const body = document.getElementById('body')
    for (i = 1 ; i < 6 ; i++) {
        const result = document.querySelector('input[name="q'+i+'"]:checked')   //Pour chaque question, on vient chercher l'input radio qui est checked
        const pAnswer = document.getElementById('answerQ'+i)       //Cela cible le p caché dans lequel on affichera bonne ou mauvaise réponse
        const questionBox = document.getElementById('question'+i)  //Là on cible la box de la question pour pouvoir la changer de couleur en fonction de la réponse
        if (result.value == responses[i - 1]) {
            questionBox.classList = 'question good'
            pAnswer.textContent = 'Bonne réponse !'
        }
        else if (result.value !== responses[i - 1]) {
            questionBox.classList = 'question bad'
            pAnswer.textContent = 'Mauvaise réponse !'
            badAnswer+=1
        }  
    }
    switch(badAnswer) {     //Affichage final en fonction du nombre de mauvaises réponses
        case 0 :
            info.innerHTML = '<p>Wow quel résultat ! '+emojis[1]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p>'
            body.classList.add('goat')
            break
        case 5 :
            info.innerHTML = '<p>'+emojis[3]+' Frérot t\'es éclaté au sol '+emojis[4]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p><p>Couz rééssaie fais un truc par pitié</p>'
            break
        default :
            info.innerHTML = '<p>'+emojis[2]+' Il reste quelques erreurs '+emojis[3]+'</p><p>Score : <span class="bold">'+(5 - badAnswer)+'/5</span></p><p>Retentez une autre réponse dans les cases rouges, puis re-validez !</p>'
    }
    info.classList.add('column')    //Nécessaire pour le CSS
}