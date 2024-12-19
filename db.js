const messages = [
  {
      id: 0,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
  },
  {
      id: 1,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
  }
];
const getMessageById = async(MessageId) => {
  return messages.find((message) => message.id === messageId);
};

const addNewMessage = async(user, text) => {
  messages.push({
    id: messages.length,
    user: user,
    text: text,
    added: new Date(),
  });
}

module.exports = { getMessageById, addNewMessage };