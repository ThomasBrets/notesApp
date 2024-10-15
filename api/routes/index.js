const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/auth");

const auth = require("./auth");
const notes = require("./notes");
const users = require("./users");

router.use("/auth", auth);
router.use("/notes", validateUser, notes);
router.use("/users", validateUser, users)

module.exports = router;







// RUTA DEL VIDEO

// app.get("/get-user", validateUser, async (req, res) => {
//     const { user } = req.user;

//     const isUser = await User.findone({_id:user._id})

//     if(!isUser){
//         res.sendStatus(401)
//     }

//     return res.json({
//         user:isUser,
//         message:""
//     })
// })
