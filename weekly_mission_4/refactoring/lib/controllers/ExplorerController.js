// Importar las clases necesarias
const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController {

    // método para obtener la lista de explorers filtrados por misión
    static getExplorersByMission(mission) {

        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    // metodo que regresa la lista de usernames de los explorers filtrados por la misión enviada.
    static getExplorersUsernamesByMission(mission) {

        const explorers = this.getExplorersByMission(mission);
        return ExplorerService.getExplorersUsernames(explorers);
    }

    // metod que regresa la cantidad de explorers en la misión enviada
    static getExplorersAmonutByMission(mission) {
        
        const explorers = this.getExplorersByMission(mission);
        return ExplorerService.getExplorersAmount(explorers);
    }




}

