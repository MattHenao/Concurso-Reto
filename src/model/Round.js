class Round{
    constructor(level, award, category, questions){
        this.level = level;
        this.award = award;
        this.category = category;

        this.questions = questions;
        

    }

    chooseQuestion (){
        const value =  Math.floor(Math.random() * (5 - 0)) + 0;
        return this.questions[value];

    }

    



    
}


module.exports = {
    Round

}