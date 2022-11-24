function random(max) {
    return Math.floor(Math.random() * max);
}
function getQuestion () {
    return getRandomQuestion ("poet-poem");
}

function getRandomQuestion (type) {
    let question = {
        "que": "",
        "correctAns": -1,
        "anss": ["","","",""]
    }
    
    if (type == "poet-poem") {
        let poetIndex = random(data.length);
        let poet = data[poetIndex];
        let poetName = poet.name;
        let correctAnsIndex = random(poet.poems.length);
        let correctAns = poet.poems[correctAnsIndex];
        question.que = "Какой из стихов принадлежит поэту " + poetName + "?";
        question.correctAns = random(4);
        question.anss[question.correctAns] = correctAns;
        
        let availablePoets = [];
        for (let i = 0; i < data.length; i++) {
            if (i != poetIndex) {
                availablePoets.push (i);
            }
        }
        for (let i = 0; i < 4; i++) {
            if (i != question.correctAns) {
                while (true) {
                    let incPoet = availablePoets[random(availablePoets.length)];
                    let incPoem = data[incPoet].poems[random(data[incPoet].poems.length)];
                    if (question.anss.indexOf(incPoem) == -1) {
                        question.anss[i] = incPoem;
                        break;
                    }
                }
                
            }
        }
    }
    return question;
}
function setQuestion (question) {
    curQuestion = question;
    let q = document.getElementById("question");
    q.innerText = question.que;
    for (let i = 0; i < 4; i++) {
        let a = document.getElementById("answer-" + i);
        a.innerText = question.anss[i];
        a.onclick = null;
        a.onclick = function () {
            if (curQuestion.correctAns == i) {
                // alert(curQuestion.correctAns + " " + i);
                a.style["box-shadow"] = "0 0 1em .25em inset green";
            } else {
                // alert(curQuestion.correctAns + " " + i);
                a.style["box-shadow"] = "0 0 1em .25em inset red";
            }
            setTimeout (() => {a.style["box-shadow"] = "none"}, 1500);
            setTimeout (changeQuestion, 2000);
        }
    }
}
function changeQuestion () {
    let newQuestion = getQuestion();
    setQuestion(newQuestion);
}

let curQuestion = getQuestion();
setQuestion(curQuestion);
