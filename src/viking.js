// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-= damage
    return
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name=name
    }
    receiveDamage(damage){
        this.health-= damage
        if (this.health <=0){
            return `${this.name} has died in act of combat`
        }else{
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }    
}


// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health= this.health-damage
        if (this.health <=0){
            return `A Saxon has died in combat`
        }else{
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]  
    }
    
    addViking(viking_in){
        let new_viking= new Viking(viking_in.name,viking_in.health,viking_in.strength,)
        this.vikingArmy.push(new_viking)

    }
    addSaxon(saxon_in){
        let new_saxon= new Saxon(saxon_in.health,saxon_in.strength)
        this.saxonArmy.push(new_saxon)

    }
    vikingAttack(){
        let random_saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let random_viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let result=random_saxon.receiveDamage(random_viking.attack())
        if (random_saxon.health <=0 ){
            this.saxonArmy.splice(random_saxon,1)
        }
        return result
    }
    /*Solução Daniel
    vikingAttack() {
        let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);
        let chosenViking = this.vikingArmy[vikingWarrior];
        let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);
        let chosenSaxon = this.saxonArmy[saxonWarrior];
        let saxonDamageTaken = chosenSaxon.receiveDamage(chosenViking.attack());
        if (chosenSaxon.health <= 0) {
          this.saxonArmy.splice(saxonWarrior, 1);
        }
        
        return saxonDamageTaken
    }*/
    saxonAttack(){
        let random_viking=this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let random_saxon=this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let result=random_viking.receiveDamage(random_saxon.attack())
        if (random_viking.health <=0 ){
            this.vikingArmy.splice(random_viking,1)
        }
        return result
    }
    showStatus(){
        if (this.saxonArmy.length===0) return 'Vikings have won the war of the century!'
        if (this.vikingArmy.length===0) return 'Saxons have fought for their lives and survived another day...'
        return 'Vikings and Saxons are still in the thick of battle.'

    }
}
