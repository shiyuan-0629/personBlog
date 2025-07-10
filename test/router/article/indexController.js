import pool from "../../utils/getMysqlPool.js";
const indexController = async (ctx) => {
    try {
        
        let {category,index} = ctx.request.query; 
        const [[{count}]] = await pool.promise().query('SELECT COUNT(*) as count FROM blog_articles where category = ?',[category]);      
        const list = [parseInt(category),parseInt(index),parseInt(index+4)]        
        const sql = 'SELECT * FROM blog_articles where category = ? order by createdAt desc limit ?,?';
        const [rows] = await pool.promise().query(sql,list);
        ctx.body = {
            code: 200,
            data: {
                data:rows,
                disable:count===rows.length+parseInt(index),
            }
        };
    } catch (error) {
        console.log(error);
        
        ctx.status = 500;
        ctx.body = {
            code: 500,
            message: '服务器内部错误'
        };
    }
}
export default indexController;