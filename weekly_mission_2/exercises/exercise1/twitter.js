const usuario  = {
    user: "Ricardo",
    username: "Ricardo",
    bio: "Hola a todos",
    dateCreation: "03/05/2022",
    qtyFollows:50,
    qtyFollowers:60,   
    getGeneralInfo: function(){
      return `This user: ${this.user}, with the username: ${this.username} follows ${this.qtyFollows} accounts.`
    }
   }
   
   console.log("Username: " + usuario.user)
   console.log(usuario.getGeneralInfo())
   console.log("--------------------");


   const tendencia  = {
    name: "The Killers",
    qtyTweets: "300000",
    dateCreation: "01/05/2022",
    
    getGeneralInfo: function(){
      return `Trending topic: ${this.name}, was created in ${this.dateCreation} and has ${this.qtyTweets} tweets.`
    }
   }

   console.log("Trending topic: " + tendencia.name)
   console.log(tendencia.getGeneralInfo())
   console.log("--------------------");

   //-----------------------------------------------------------------------------------------------------

  
   const hashtags  = {
    name: "#Hola",
    qtyTweets: "100000",
    dateCreation: "03/05/2022",
    
    getGeneralInfo: function(){
      return `Hashtag: ${this.name}, was created in ${this.dateCreation} and has ${this.qtyTweets} tweets.`
    }
   }

   console.log("Hashtag: " + hashtags.name)
   console.log(hashtags.getGeneralInfo())