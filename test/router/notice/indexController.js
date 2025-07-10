import pool from "../../utils/getMysqlPool.js";
const indexController = async (ctx) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM notice order by created_at desc');
        rows.forEach(row => {
            row.created_at = row.created_at.toISOString().split('T')[0];
        });
        ctx.body = {
            code: 200,
            data: rows
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