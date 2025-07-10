import pool from "../../utils/getMysqlPool.js";
import { v4 as uuidv4 } from 'uuid';
import dayjs from "dayjs"

const createMessageController = async (ctx) => {
    try {
        const {input,parentMid,circleUrl,nickname,email} = ctx.request.body;
        const messageId = uuidv4();
        const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
        let sql = "insert into messages(mid, parentMid, name, email, avatar, content, createdAt) values(?,?,?,?,?,?,?)";
        let list = [messageId,parentMid,nickname,email,circleUrl,input,date];
        await pool.promise().query(sql,list);
        ctx.body = {
            code: 200,
            data: {"message":"发布成功","mid":messageId},
        };
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };
    }
}
export default createMessageController;