const usuario  = {
    userUrl: "https://www.facebook.com/Ricardo",
    username: "Ricardo",
    qtyFriends: "1500",
    dateCreation: "11/04/2008",
    works:"Nose",
    lives:"En tu casa",   
    getGeneralInfo: function(){
      return `This user: ${this.username}, with the account: ${this.userUrl} has ${this.qtyFriends} friends.`
    }
   }
   
   console.log("Username: " + usuario.username)
   console.log(usuario.getGeneralInfo())
   console.log("--------------------");

   //-----------------------------------------------------------------------------------------------------


   const postear  = {
    userCreator: "Ricardo",
    location: "En el baño",
    description: "Aqui en el baño agusto",
    imageUrl:"Imagen URL",
    dateCreation:"03/05/2022",  

    getGeneralInfo: function(){
      return `Post created by: ${this.userCreator}, with this description: ${this.description} on ${this.dateCreation}.`
    }
   }
   
   console.log("Post Location: " + postear.location)
   console.log(postear.getGeneralInfo())
   console.log("--------------------");

    //-----------------------------------------------------------------------------------------------------


   const historias  = {
    userCreator: "Ricardo",
    imageVideoUrl:"Imagen URL",
    dateCreation:"03/05/2022",    
    caption:"Foto",
    getGeneralInfo: function(){
      return `Storie created by: ${this.userCreator}, with this image: ${this.imageVideoUrl} on ${this.dateCreation}.`
    }
   }

   console.log("Storie created by: " + historias.userCreator)
   console.log(historias.getGeneralInfo())