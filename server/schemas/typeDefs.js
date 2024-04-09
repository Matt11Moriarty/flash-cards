const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Flashcard {
    _id: ID
    title: String
    frontText: String
    backText: String
    category: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getAllUsers: [User]!
    getSingleUser(userId: ID!): User
    me: User
    getAllFlashcards: [Flashcard]
    getSingleFlashcard(flashcardId: ID!): Flashcard
}

type Mutation {
    login(userName: String!, password: String!): Auth
    createUser(userName: String!, email: String!): Auth
    createFlashcard(
        title: String!
        frontText: String!
        backText: String!
        category: String!
    ): Flashcard
}
`

module.exports = typeDefs;