import User from "../models/user.model.js";

export async function getUserList(req, res) {
  try {
    const searchQuery = req.query.search || "";

    const filter = searchQuery
      ? { username: { $regex: searchQuery, $options: "i" } }
      : {};

    const users = await User.find(filter, "username");

    if (users && users.length > 0) {
      return res.status(200).json({
        users: users.map((user) => user.username),
      });
    } else {
      return res.status(404).json({ message: "No users found" });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

export async function count(req, res) {
  try {
    const users = await User.find({}, "username");

    if (users) {
      return res.status(200).json({ "user count": users.length });
    } else {
      return res.send("no users found");
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
