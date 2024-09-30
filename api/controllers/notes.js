const NotesService = require('../services/notes')



class NotesController {
    static async addNote(req, res) {
      const { error, data } = await NotesService.addNote(req.body);
      
      return error
        ? res.status(data.status || 500).json({ message: data })
        : res.status(201).json(data);
    }
    static async loginUser(req, res) {
      const { email, password } = req.body;
  
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return res.status(401).json({ error: "email inválido" });
          }
          user.validatePassword(password).then((isValid) => {
            if (!isValid) {
              return res.status(401).json({ error: "contraseña inválida" });
            }
  
            const payload = {
              email: user.email,
              password: user.password,
            };
  
            const token = generateToken(payload);
            console.log("TOKEN", token);
  
            res.cookie("token", token);
  
            console.log("PAYLOAD", payload);
            res.send(payload);
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Error interno del servidor" });
        });
    }
    static async logoutUser(req, res) {
      res.clearCookie("token");
      res.sendStatus(204);
    }
  
    static async secret(req, res) {
      res.send(req.user)
    }
  
    static async findMyUser(req, res) {
      console.log("Cookies: ", req.cookies); // Verificar si la cookie llega
      console.log("USER", req.user);
      res.send(req.user)
      
    }
  }


  module.exports = NotesController;
  