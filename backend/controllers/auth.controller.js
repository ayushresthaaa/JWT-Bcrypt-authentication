// let users = []; //in memory user storage
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
//api for registration

// export async function register(req, res){
//     try{ const{ username, password }  = req.body;

//     const userExists = await User.findOne({username});

//     if(userExists){
//         return res.status(400).json({message: 'Username already exsits'});
//     }

//     const hasedPassword = await bcrypt.hash(password,10);

//     // users.push({username, password});

//     const user = new User({username, password:hasedPassword});
//     await user.save();
// } catch(e) { return res.status(500).json(e); }

// finally {
//     res.status(201).json({message : "User registered sucessfully"});
//  }
// }
export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ $or: [{ username }, { email }] });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "Username or Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (e) {
    return res.status(500).json(e);
  }
}

//api for login
export async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "There is no such username" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1m",
    });

    res.json({ message: "Login sucessful", user, token });
  } catch (e) {
    return res.status(500).json(e);
  }
}
