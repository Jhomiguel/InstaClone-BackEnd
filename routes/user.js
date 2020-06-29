const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  searchUser,
  followUser,
  unfollowUser,
  updateProfilePic,
} = userController;
router.get("/user/:id", searchUser);
router.put("/follow", auth, followUser);
router.put("/unfollow", auth, unfollowUser);
router.put("/updateprofilePic", auth, updateProfilePic);

module.exports = router;
