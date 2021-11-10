"use strict";

import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/** API Class.
 *
 * Static classes tying together methods used to get/send to the API.
 */

class AprèsSkiMeApi {

  /** Formats an API request. Returns data or throws an error message*/
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_API_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /** Gets all snacks. Returns an array like : 
   * [{id, name, description, recipe, serve}, ...]
   */
  static async getSnacks() {
    const result = await this.request("snacks");
    console.log("getSnacks result is ", result)
    return result;
  }

  /** Gets all drinks. Returns an array like : 
   * [{id, name, description, recipe, serve}, ...]
   */
  static async getDrinks() {
    const result = await this.request("drinks");
    console.log("getDrinkss result is ", result)
    return result;
  }

  /** Adds an item to the API and returns the item as an array like: 
   * [{id, name, description, recipe, serve}, ...]
  */
  static async addItem(item) {
    const { type, name, description, recipe, serve } = item;
    const id = name.replace(/\s+/g, '-').toLowerCase();

    const itemToAdd = { id, name, description, recipe, serve };

    const result = await this.request(`${type}`, itemToAdd, "post");
    console.log("addItem result is ", result)
    return result;
  }

}

export default AprèsSkiMeApi;
