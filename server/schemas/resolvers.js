const { User, Flashcard } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find();
        },
        getSingleUser: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        me: async(parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            } else {
                throw new AuthenticationError('Not logged in.');
            }
        },
        getAllFlashcards: async () => {
            return Flashcard.find();
        },
        getSingleFlashcard: async (parent, { flashcardId }) => {
            return flashcardId.findOne({ _id: flashcardId });
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ userName });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password)
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user }
        },
        createUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);
            return { token , user };
        },
        createFlashcard: async (parent, {title, frontText, backText, category}) => {
            const flashcard = await Flashcard.create({ title, frontText, backText, category });
            return flashcard
        }
    }
}

module.exports = resolvers;