class ExplorerService{

    //Obtener la lista de explorers que solo están en mision(node).
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    //Obtener la cantidad de explorers filtrados filterByMission.
    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length;
    }

    //Obtener la lista de usuarios de github de los explorers filtrados filterByMission
    static getExplorersUsernamesByMission(explorers, mission){
        return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;