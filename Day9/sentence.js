let sentenceBuilder = {

    subject: "I",
    
    verb: "am",
    
    object: "coding",
    error: '',
    
    buildSentence: function() {
        if(this.error){
            return `${this.error}`
        }
        return `${this.subject} ${this.verb} ${this.object}`
    },
    
    updateProperty: function(property, value) {
        if(property=='verb'){
            if(value == ''){
                this.error = 'Incomplete sentence'
            }else{

                this.verb = value
            }
        }else if(property == 'subject'){
            this.subject = value
        }
        else{
            this.error= 'Invalid property'
        }
    } 
};

console.log(sentenceBuilder.buildSentence())
sentenceBuilder.updateProperty("verb", "am learning"); 
console.log(sentenceBuilder.buildSentence())
sentenceBuilder.updateProperty("subject", "The cat")
console.log(sentenceBuilder.buildSentence())
sentenceBuilder.updateProperty("mood", "happy")
console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence());