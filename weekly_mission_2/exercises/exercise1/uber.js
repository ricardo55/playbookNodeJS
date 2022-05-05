const perfil  = {
    username: "Ricardo",
    carModel: "Versa",
    carPlate: "HOLA123",
    qtyTrips:5678,
    rating:4,  
    years:1, 
    getGeneralInfo: function(){
      return `This user: ${this.username}, has a: ${this.carModel} car with car plate ${this.carPlate}.`
    }
   }
   
   console.log("Username: " + perfil.username)
   console.log(perfil.getGeneralInfo())

   //-----------------------------------------------------------------------------------------------------

   const viaje  = {
    from: "Trabajo",
    to: "Casa",
    distance: "2 km.",
    price:"$60.00",
    estimatedTime:"7 min.",  
    getGeneralInfo: function(){
      return `Travel from: ${this.from} to ${this.to} has a cost of: ${this.price}.`
    }
   }
   
   console.log("Estimated time: " + viaje.estimatedTime)
   console.log(viaje.getGeneralInfo())