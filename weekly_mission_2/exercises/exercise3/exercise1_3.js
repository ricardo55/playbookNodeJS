class pullRequest{
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
     this.title = title
     this.branchName = branchName
     this.dateCreated = dateCreated
     this.status = status
     this.repositoryNameAssociated = repositoryNameAssociated
    } 

    getTitleAndRepository(){
        return `This PR, ${this.title} is of ${this.repositoryNameAssociated}`
      }
    getStatus(){
        return `Status(${this.status}).`
      }
  }

  const pull = new pullRequest("Subir cambios de datos","master","03-05-2022", "OK","playbookNodeJS") 
  
  console.log("Name of Pull Request: " + pull.title)
  console.log("Information: " + pull.getTitleAndRepository())
  console.log("Status of PR: " +pull.getStatus())