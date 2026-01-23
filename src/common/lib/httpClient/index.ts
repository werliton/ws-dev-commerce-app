import axios from "axios";
import { IHttpClient } from "./http.interface";

const httpClient: IHttpClient = {
  get: async <T>(url: string): Promise<T> => {
    const response = await axios.get<T>(url);
    return response.data;
  },
};
export default httpClient;
