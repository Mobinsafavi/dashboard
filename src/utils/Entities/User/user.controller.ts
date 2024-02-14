import APIHandler from "../../ApiHandler/ApiInstance";

class UserController {
  static signup(userData: any) {
    return APIHandler.call({
      url: " http://localhost:5000/app/user/signup",
      method: "POST",
      data: userData,
    });
  }
  static login(userData: any) {
    return APIHandler.call({
      url: " http://localhost:5000/app/user/login",
      method: "POST",
      data: userData,
    });
  }
}

export default UserController;
