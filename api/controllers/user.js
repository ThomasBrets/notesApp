const UsersServices = require("../services/user");

class UsersController {
  static async getUser(req, res) {
    const { error, data } = await UsersServices.getUser(req.params.userId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(200).json(data);
  }
}

module.exports = UsersController;
