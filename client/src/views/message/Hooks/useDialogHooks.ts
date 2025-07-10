import instance from "@/api/index";
import type { Message } from "../entry";

const dialog = ref({
    who: "",
    visible: false,
});
let message: Message | undefined = undefined;
const data = ref({
    input: '',
    parentMid: '',
    circleUrl: '',
    nickname: '',
    email: ''
});
async function sumbit() {
    const nickname = localStorage.getItem("nickname") || undefined;
    const email = localStorage.getItem("email") || undefined;
    const circle = localStorage.getItem("circle") || undefined;
    if (nickname && email && circle) {
        data.value.circleUrl = circle;
        data.value.email = email;
        data.value.nickname = nickname;
        data.value.parentMid = data.value.parentMid;
        dialog.value.visible = false;
        const res: any = await instance.post("/api/messages/createMessage", data.value)
        if (res.code === 200) {
            if (message !== undefined)
                message.children.push({
                    mid: res.data.mid,
                    parentMid: message.mid,
                    name: nickname,
                    email: email,
                    avatar: circle,
                    content: data.value.input,
                    createdAt: new Date().toISOString().split(".")[0].replace("T", " "),
                    isDelete: 0,
                    children: []
                });
        }
        data.value.input = "";
    } else {
        ElMessage.warning("请先提供邮箱和昵称");
    }
}


function reply(msg: Message) {
    data.value.parentMid = msg.mid;
    dialog.value.who = msg.name;
    dialog.value.visible = true;
    message = msg;
}


export { dialog, data, reply, sumbit, type Message };