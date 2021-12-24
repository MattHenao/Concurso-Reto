
const {SaveData}  = require('../database/dataBase');
class Question{
    constructor(nameQuestion, answers){
        this.nameQuestion = nameQuestion;
        this.answers = answers;
    }
    createQuestion(){
        SaveData(this, './questionsDataBase.json')
    }
}
let pregunta1 = new Question('my question', [{
    answer: "answer 1",
    isCorrect: true
},
{
    answer: "answer 2",
    isCorrect: true
},
{
    answer: "answer 3",
    isCorrect: false
},
{
    answer: "answer 4",
    isCorrect: false
}]);

pregunta1.createQuestion();

