const isShowDrawer = ref<boolean>(false);
const options = [
    { value: '163.com', label: '@163.com' },
    { value: 'qq.com', label: '@qq.com' },
    { value: '126.com', label: '@126.com' },
    { value: 'gmail.com', label: '@gmail.com' },
    { value: 'hotmail.com', label: '@hotmail.com' }
];
const personInfo = ref({
    circleUrl:'',
    email:'',
    suffix:'',
    nickname:''
});

const open = () => {
    isShowDrawer.value = true;
    if (localStorage.getItem('email')) {
        ElMessage.info('邮箱已存在，但是可以重新提交表示切换邮箱');
    }
};

const submitEmail = () => {
    if (!personInfo.value.email || !personInfo.value.suffix) {
        ElMessage.error('请输入邮箱和后缀');
        return;
    }
    let Eadr = personInfo.value.email + "@" + personInfo.value.suffix;
    ElMessage.success(`已保存在本地以便用户留言时使用`);
    localStorage.setItem('email', Eadr);
    localStorage.setItem('nickname', personInfo.value.nickname);
    personInfo.value.circleUrl = `https://picsum.photos/seed/user${Math.ceil(Math.random() * 100)}/200/200`;
    localStorage.setItem("circle", personInfo.value.circleUrl);
    isShowDrawer.value = false;
}

export {isShowDrawer,options,personInfo,open,submitEmail};