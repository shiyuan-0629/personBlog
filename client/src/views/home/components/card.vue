<template>
    <div class="info">
        <img :src="personInfo.avatar" alt="" class="avatar">
        <div>
            <h3>{{ personInfo.name }}</h3>
            <p>邮箱：{{ personInfo.email }}</p>
            <p>所在地：{{ personInfo.address }}</p>
            <p>{{ personInfo.motto }}</p>
        </div>
        <div class="account">
            <a :href="personInfo.douyin"><img src="../../../assets/抖音.png" alt=""></a>
            <a :href="personInfo.bilibili"><img src="../../../assets/哔哩哔哩.png" alt=""></a>
            <a :href="personInfo.github"><img src="../../../assets/github.png" alt=""></a>
        </div>
    </div>
</template>

<script setup lang='ts'>
const personInfo = {
    avatar : "https://q1.qlogo.cn/g?b=qq&nk=2605748439@qq.com&s=100",
    name : "Feng·Chao·Pan",
    email:"2605748439@QQ.com",
    address:"湖南湘潭",
    motto:"悲观者永远正确，乐观者永远前行。",
    douyin:"https://www.douyin.com/user/MS4wLjABAAAAbJBLnI2E7Yv3YharTkzbhhq1mFk0mIEioKHALL2q2oI",
    bilibili:"https://space.bilibili.com/2043242549",
    github:"https://github.com/shiyuan-0629",
};

</script>

<style scoped>
.info {
    position: fixed;
    width: 350px;
    height: 800px;
    border-radius: 30px;
    background-color: rgba(247, 136, 1, 0.8);
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.info:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
}
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.account{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
a img{
    width: 50px;
    gap: 100px;
}
</style>