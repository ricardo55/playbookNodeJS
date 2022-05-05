class Usuario {
    constructor(user, userName, bio, age) {
        this.user = user,
        this.userName = userName,
        this.bio = bio,
        this.age = age
    }
}

class Tendencias {
    constructor(topic, numberOfComments, numberOfRetwits, topicIn) {
        this.topic = topic,
        this.numberOfComments = numberOfComments,
        this.numberOfRetwits = numberOfRetwits,
        this.topicIn = topicIn
    }
}

class Hashtags {
    constructor(hashtag, numberOfUsages) {
        this.hashtag = hashtag,
        this.numberOfUsages = numberOfUsages
    }
}