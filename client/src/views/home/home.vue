<template>
    <div class="main">
        <card />
        <div class="content" style="background-color: #3fa3ac;">
            <div class="metric">
                <MetricCard title="项目经验" value="20" duration="1000" />
                <MetricCard title="技术支持" value="70" duration="3000" />
                <MetricCard title="毕业设计" value="30" duration="2000" />
                <MetricCard title="大数据处理" value="10" duration="500" />
            </div>
            <div class="personInfo">
                <div class="info"><span>教育背景：</span>大学攻读大数据工程专业，系统学习数据挖掘、数据分析与处理等核心课程，紧跟行业前沿技术。</div>
                <div class="info"><span>技术能力 - 分布式系统：</span>熟练掌握分布式系统原理与架构，能基于 Hadoop、Spark 等框架搭建高效数据处理平台，保障数据存储、计算与传输的稳定可靠。</div>
                <div class="info"><span>技术能力 - 数据可视化：</span>精通数据可视化技术，擅长使用 ECharts、DataEase 等工具，将复杂数据转化为直观图表，助力挖掘数据价值。</div>
                <div class="info"><span>技术能力 - 前端开发：</span>精通 HTML、CSS、JavaScript，熟练运用 Vue.js、React 等框架，可开发交互友好、界面美观的用户界面。</div>
                <div class="info"><span>技术能力 - 后端开发：</span>掌握 Java、Python、NodeJs 等编程语言，熟悉 Spring Boot、Django、Express 等主流框架，能独立完成 API 设计与业务逻辑开发。</div>
                <div class="info"><span>技术能力 - Linux：</span>深入了解 Linux 操作系统，熟练掌握常用命令、系统管理与服务部署，可快速处理服务器端技术问题。</div>
            </div>
            <div class="notice">
                如果需要技术支持，请为我的邮箱留言！<br>
                (注意留下联系方式，我会第一时间与您联系)
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import card from './components/card.vue';
import MetricCard from './components/MetricCard.vue';
</script>

<style scoped>
.metric{
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.personInfo{
    padding: 5%;
}
.info{
    margin-bottom: 20px;
}
.info span{
    font-weight: bolder;
    
}
.notice{
    width: 100%;
    text-align: center;
    font-size: small;
    color: #c2c2c2;
}
</style>
