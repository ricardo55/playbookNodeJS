class issue{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author,dateCreated,lastUpdated){
     this.title = title
     this.repositoryNameAssociated = repositoryNameAssociated
     this.status = status
     this.numberOfComments = numberOfComments
     this.labels = labels
     this.author = author
     this.dateCreated = dateCreated
     this.lastUpdated = lastUpdated
    } 

    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`
      }
    getGeneralInfo(){
        return `\n Date of Creation: ${this.dateCreated} \n Status(${this.status}). \n The number of comments are: ${this.numberOfComments}`
      }
  }

  const problemaRic = new issue("Error de Sintaxis","playbookNodeJS","Not Working",10, "JS, NodeJS","Ricardo","03-05-2022","04-05-2022") 
  
  console.log("Name of issue: " + problemaRic.title)
  console.log("Information: " + problemaRic.getTitleAndAuthor())
  console.log("Data: " +problemaRic.getGeneralInfo())