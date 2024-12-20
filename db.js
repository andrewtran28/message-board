const getFormattedDate = () => {
  const date = new Date();

  const options = { month: 'short' };
  const month = new Intl.DateTimeFormat('en-US', options).format(date);
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() < 12 ? 'AM' : 'PM';

  const timezone = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' })
    .format(date)
    .split(' ')
    .pop();

  return `${month} ${day}, ${year} @ ${hours}:${minutes}${ampm} ${timezone}`;
}

const messages = [
  {
      id: 0,
      text: "Hey everyone! I have good news to share!",
      user: "Jimothy",
      added: getFormattedDate()
  },
  {
      id: 1,
      text: "This message will self-destruct in 5...4...3...",
      user: "Hana",
      added: getFormattedDate()
  }
];

const getMessages = async () => {
  return messages;
}

const addMessage = async (user, text) => {
  messages.push({
    id: messages.length,
    user: user,
    text: text,
    added: getFormattedDate()
  })
}

const getMessageId = async (messageId) => {
  return messages.find((message) => message.id === parseInt(messageId));
}

module.exports = { getMessages, addMessage, getMessageId };