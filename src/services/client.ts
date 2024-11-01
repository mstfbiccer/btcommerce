import axios, { AxiosInstance } from 'axios';

/**
 * Axios client
 *  - Create axios instance
 * - Set base URL
 * - Set timeout
 * - Set headers
 * @type {AxiosInstance}
 * @returns {AxiosInstance}
 * @throws {Error}
 * @example
 * axiosClient.get('/users')
 */
const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000
});

/**
 * Axios request interceptor
 *  - Add API_KEY to request headers
 * @param config - Axios request configuration
 * @returns {Promise<any>} - Modified request configuration
 * @throws {Error}
 */
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Axios response interceptor
 * - Handle response error
 * @param response - Axios response
 * @returns {Promise<any>} - Response data
 * @throws {Error}
 */
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosClient };
