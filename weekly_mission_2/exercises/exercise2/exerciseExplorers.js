const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombre explorers")
explorers.forEach(explorer => console.log(explorer.name))

//Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack explorers")
explorers.forEach(explorer => console.log(`Explorer name: ${explorer.name} y el Stack ${explorer.stack}`))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Lista Stack")
const stackList = explorers.map((explorer) => explorer.stack)
console.log(stackList)

// Obtén la lista de explorers que tengan en su stack "js", 
// usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Explorers with 'js' stack")
const explorersJS = explorers.find((explorer) => explorer.stack.includes("js"))
console.log(explorersJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Explorers from CDMX")
const explorersFromCDMX = explorers.filter((explorer) => explorer.city=="CDMX")
console.log(explorersFromCDMX)

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Qty exercises_completed")
const qty= explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(qty)

// Obtén la validación si al menos uno de los explorers tiene la propiedad 
// exercisesFinished en frontend como true, usa SOME
console.log("Someone Completed FrontEnd Exercises?")
const areSomeTrue = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

// Obtén la validación si todos los explorers tienen la propiedad isFinished 
// del onboarding como true. Usa EVERY.
console.log("Everyone Finished Onboarding?")
const areEveryTrue = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished === true)
console.log(areEveryTrue)


