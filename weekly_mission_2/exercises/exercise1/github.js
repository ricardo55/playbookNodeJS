const pullRequest = {
    title: 'My Daily Pull Request',
    branchName: 'master',
    dateCreated: '02/05/2022',
    status: 'Accepted',
    repositoryNameAssociated: 'playbookNodeJS',
    author: 'ricardo55',
    getStatus: function () {
        return this.status; 
    },
    getTitleAndAuthor: function () {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

console.log(pullRequest);
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());

//-----------------------------------------------------------------------------------------------------

const repository = {
    name: "playbookNodeJS",
    author: "ricardo55",
    language: "JavaScript",
    numberOfCommits: 20,
    stars: 3,
    forks: 5,
    issues_open: 7,
    issues_close: 1,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repository.name)
console.log("Issues totales: " + repository.getTotalIssues())
console.log(repository.getGeneralInfo())