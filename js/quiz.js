import data from './quiz.json' assert { type: 'json' };

function random(max) {
    return Math.floor(Math.random() * max);
}

let questionTypes = ["poet-poem", "poem-poet"];
function getQuestion () {
    return getRandomQuestion (questionTypes[random(questionTypes.length)]);
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
        let poetName = poet.altName;
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
    } else if (type == "poem-poet") {
        let poetIndex = random(data.length);
        let poet = data[poetIndex];
        let queIndex = random(poet.poems.length);
        let que = poet.poems[queIndex];
        question.que = "Какому поэту принадлежит стих \"" + que + "\"?";
        question.correctAns = random(4);
        question.anss[question.correctAns] = poet.name;
        
        let availablePoets = [];
        for (let i = 0; i < data.length; i++) {
            if (i != poetIndex) {
                availablePoets.push (i);
            }
        }
        for (let i = 0; i < 4; i++) {
            if (i != question.correctAns) {
                while (true) {
                    let incPoet = data[availablePoets[random(availablePoets.length)]].name;
                    if (question.anss.indexOf(incPoet) == -1) {
                        question.anss[i] = incPoet;
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
                a.style["box-shadow"] = "0 0 1em .25em inset green";
            } else {
                a.style["box-shadow"] = "0 0 1em .25em inset red";
            }
            setTimeout (() => {
                a.style.transition = "0s";
                a.style["box-shadow"] = "none";
                changeQuestion (a);
            }, 2000);
            setTimeout (() => {
                a.style.transition = "2s";
            }, 4000);
        }
    }
}
function changeQuestion (elem) {
    
    let newQuestion = getQuestion();
    setQuestion(newQuestion);
    
}

let curQuestion = getQuestion();
setQuestion(curQuestion);
