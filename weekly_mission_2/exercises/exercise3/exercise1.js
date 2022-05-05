class repo{
    constructor(name, author, language, numberOfCommits, stars, forks,issues_open,issues_close){
     this.name = name
     this.author = author
     this.language = language
     this.numberOfCommits = numberOfCommits
     this.stars = stars
     this.forks = forks
     this.issues_open = issues_open
     this.issues_close = issues_close
    } 

    getTotalIssues(){
        return this.issues_open + this.issues_close
        }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }

    set setAuthor(author) {
        this.author = author
    }
  }

const explorer = new repo("LaunchX","carlogilmar", "JavaScript", 50,60,34,3,2) 
console.log("Nombre del repo:" + explorer.name)
console.log("Issues totales: " + explorer.getTotalIssues())
console.log(explorer.getGeneralInfo())

repo.setAuthor = 'Ricardo';
console.log(repo.getGeneralInfo);
console.log(repo);