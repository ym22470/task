

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} message={message} />
        
      ))}
    </div>
  );
}

export default MessageList;