/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import axios from "axios";
import type {
  ApiConfig,
} from "./api.types"


/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

}

export const addExpense = async (user, amount, category, note, date) => {
  try {
    const response = await axios.post(`${Config.API_URL}/add`, {
      user,
      amount,
      category,
      note,
      date,
    });
    return response.data;
  } catch (error) {
    console.error("Error can't add an expense:", error);
  }
};


export const getExpenses = async (user) => {
  try {
    const response = await axios.get(`${Config.API_URL}/${user}`);
    return response.data;
  } catch (error){
    console.error("Error can't get expenses:", error);
  }
};

export const ModifiyExpense = async (id, amount, category) => {
  try {
    const response = await axios.put(`${Config.API_URL}/${id}`, { amount, category });
    return response.data;
  } catch (error){
    console.error("Error can't modify an expense:", error);  
  }
};

export const DeleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${Config.API_URL}/${id}`);
    return response.data;
  } catch (error){  
    console.error("Error can't delete an expense:", error);
  }
};  


export const api = new Api()
