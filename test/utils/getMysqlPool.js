import mysqlConfig from "../config/mysqlConfig.js"
import mysql from "mysql2"
const getMsyqlPool = mysql.createPool(mysqlConfig)
export default getMsyqlPool