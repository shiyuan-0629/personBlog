import buildTree from "./utils.js";
import pool from "../../utils/getMysqlPool.js";
const indexController = async (ctx) => {
    try {
        const [rows] = await pool.promise().query('select * from messages order by createdAt DESC');        
        const messages = buildTree(rows);
        ctx.body = {
            code: 200,
            data: messages
        };
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };
    }
}
export default indexController;