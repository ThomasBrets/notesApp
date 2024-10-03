const User = require("../models/user");

class UsersServices {
  static async getUser(id) {
    try {
      const user = await User.findOne({ _id: id });
      console.log("USERSERVICE", user);
      

      return {error: false, data: user} 
    } catch (error) {
        return {error: true, data: error.message}
    }
  }
}

module.exports = UsersServices;
