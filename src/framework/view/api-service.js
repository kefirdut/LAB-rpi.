export default class ApiService {
  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  async _load({ url, method = "GET", body = null, headers = new Headers() }) {
    const fullUrl = `${this._endPoint}/${url}`;
    console.log(`Request: ${method} ${fullUrl}`, body ? JSON.parse(body) : null);
  
    const response = await fetch(fullUrl, { method, body, headers });
  
    try {
      ApiService.checkStatus(response);
      return response;
    } catch (err) {
      console.error("Ошибка при выполнении запроса:", err);
      ApiService.catchError(err);
    }
  }
  

  static parseResponse(response) {
    return response.json();
  }

  static checkStatus(response) {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  get(url) {
    return this._load({ url });
  }

  post(url, data) {
    return this._load({ url, method: "POST", body: data });
  }

  delete(url) {
    return this._load({ url, method: "DELETE" });
  }
  
}
