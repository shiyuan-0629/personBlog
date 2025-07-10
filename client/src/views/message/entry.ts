interface Message {
    mid: string,
    parentMid: string,
    name: string,
    email: string,
    avatar: string,
    content: string,
    createdAt: string,
    isDelete: number,
    children: Array<Message>
};
export type {Message};
