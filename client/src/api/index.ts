import axios, { AxiosError } from "axios";
import { ElMessage } from "element-plus";
const instance = axios.create({
    timeout: 10000,
})

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return handleRequestError(error);
    }
)

const handleRequestError = (error: AxiosError) => {
    const response = error.response as { data: { message: string } };
    ElMessage.error(response.data.message || '请求失败');
    return Promise.reject(error);
}
export default instance;
