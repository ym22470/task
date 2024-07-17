

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} message={message} />
        message.text
        
      ))}
    </div>
  );
}

export default MessageList;