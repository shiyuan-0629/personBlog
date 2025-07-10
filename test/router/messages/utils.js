const buildTree = (messages, parentMid = "") => {
    return messages
        .filter(message => message.parentMid === parentMid)
        .map(message => {
            const parentMessage = messages.find(m => m.mid === parentMid);
            const content = parentMessage 
                ? `@${parentMessage.name} ${message.content}`
                : message.content;
            return {
                ...message,
                content,
                children: buildTree(messages, message.mid)
            };
        });
};
export default buildTree;