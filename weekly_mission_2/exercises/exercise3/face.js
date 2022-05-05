class Usuario {
    constructor(name, surname, nickname, age, birthdate) {
        this.name = name,
        this.surname = surname,
        this.nickname = nickname,
        this.age = age,
        this.birthdate = birthdate
    }
}

class Posts {
    constructor(post, totalReactions, totalComments, firstComment) {
        this.post = post,
        this.totalReactions = totalReactions,
        this.totalComments = totalComments,
        this.firstComment = firstComment
    }
}

class Biografia {
    constructor(name, bio, joinDate, follower) {
        this.name = name,
        this.bio = bio,
        this.joinDate = joinDate,
        this.follower = follower
    }
}