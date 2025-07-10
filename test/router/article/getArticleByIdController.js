import pool from "../../utils/getMysqlPool.js";
const getArticleByIdController = async (ctx) => {
    try {
        const mid = ctx.request.params.mid;
        const [rows] = await pool.promise().execute('SELECT * FROM blog_articles where bid = ?', [mid]);
        ctx.body = {
            code: 200,
            data: rows[0],
        };
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };
    }
}
export default getArticleByIdController;