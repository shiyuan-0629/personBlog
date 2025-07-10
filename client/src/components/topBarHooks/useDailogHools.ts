import instance from "@/api";
import type { Router } from "vue-router";
import { messages } from "@/views/message/Hooks/initHooks";
import type { Message } from "@/views/message/entry";
let router: Router | undefined = undefined;
const input = ref<string>("");
const indexName = ref<string>("Home");
const index = ref<string>("1");
const data = ref({
    input: '',
    circleUrl: '',
    nickname: '',
    email: '',
    parentMid: ''
});

const sumbit = async () => {
    const email = localStorage.getItem('email');
    const circle = localStorage.getItem('circle');
    const nickname = localStorage.getItem('nickname');
    if (nickname && email && circle) {
        if (router !== undefined) {
            data.value.circleUrl = circle;
            data.value.email = email;
            data.value.nickname = nickname;
            data.value.input = input.value;
            input.value = "";
            const res: any = await instance.post("/api/messages/createMessage", data.value);
            if (res.code === 200) {
                if (indexName.value === "Message") {
                    const msg: Message = {
                        mid: res.data.mid,
                        parentMid: '',
                        name: nickname,
                        email: email,
                        avatar: circle,
                        content: data.value.input,
                        createdAt: new Date().toISOString().split(".")[0].replace("T"," "),
                        isDelete: 0,
                        children: []
                    }
                    messages.value.unshift(msg);
                } else {
                    indexName.value = "Message";
                    index.value = "3";
                    router.push("/message");
                }
            }
        }
    } else {
        ElMessage.warning("请先提供邮箱和昵称")
    }
}


const getRouter = (useRouter: Router) => {
    router = useRouter;
}

export { input, indexName,index, sumbit, getRouter };