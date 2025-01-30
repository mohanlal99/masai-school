let sentenceBuilder = {
  subject: "I",
  verb: "am",
  object: "coding",
  buildSentence: function () {
    return `${this.subject} ${this.verb} ${this.object}`
  },
  updateProperty: function (property, value) {
    
    sentenceBuilder[property] = value
  },
};

sentenceBuilder.updateProperty("subject","The cat")
console.log(sentenceBuilder.buildSentence())
