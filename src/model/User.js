class User{
    constructor(name, score, level){
        this.name = name;
        this.score = score;
        this.level = level;
    }

    addAward(award){
        this.score = this.score + award;
    }

  
    
}

module.exports = {
    User
}