
// Modelo 1

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("--------------------");
   

   //-----------------------------------------------------------------------------------------------------

    // Modelo 2

    const issue = {
      title: "Error en el metodo getTotalIssues",
      repositoryNameAssociated: "playbookNodeJS",
      status: "Not Working",
      numberOfComments: 15,
      labels: "JS, NodeJS",
      author: "Ricardo",
      dateCreated: "02-05-2022",
      lastUpdated: "03-05-2022",
      getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
      },
      getGeneralInfo: function(){
        return `\n Date of Creation: ${this.dateCreated} \n Status(${this.status}). \n The number of comments are: ${this.numberOfComments}`
      }
     }
  
     console.log("Name of issue: " + issue.title)
     console.log("Information: " + issue.getTitleAndAuthor())
     console.log("Data: " +issue.getGeneralInfo())
     console.log("--------------------");
  
  
     //-----------------------------------------------------------------------------------------------------

     // Modelo 3
  
     const pullRequest = {
      title: "Subida de Repo",
      branchName: "Master",
      dateCreated: "02-05-2022",
      status: "OK",
      repositoryNameAssociated: "playbookNodeJS",
      getTitleAndRepository: function(){
        return `This PR, ${this.title} is of ${this.repositoryNameAssociated}`
      },
      getStatus: function(){
        return `Status(${this.status}).`
      }
     }
  
     console.log("Name of Pull Request: " + pullRequest.title)
     console.log("Information: " + pullRequest.getTitleAndRepository())
     console.log("Status of PR: " +pullRequest.getStatus())
