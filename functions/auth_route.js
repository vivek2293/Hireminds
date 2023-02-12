const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authentication = require("../models/auth_model");
const sendMail = require("../middlewares/mailer");

const getRequest = async (req, res) => {
  const data = await authentication.find({});
  res.json({ data });
};

const register = async (req, res) => {
  const { instituteName, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(403).json({ msg: "Invalid credentials." });
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  const profile = {
    clubName,
    hashedpassword,
  };

  authentication
    .create({ instituteName, email, password: hashedpassword })
    .then(() => {
      console.log("Profile successfully created.");
    })
    .catch((err) => {
      console.log(err);
    });

  const accesstoken = jwt.sign({ profile }, process.env.JWT_SECRET, {
    expiresIn: "2m",
  });
  const refreshtoken = jwt.sign({ profile }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7 day",
  });

  return res
    .cookie("jwt", refreshtoken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({ token: accesstoken });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const profile = await authentication.find({ email });
  if (profile.length != 1)
    return res.status(403).json({ msg: "Club not found." });

  if (await bcrypt.compare(password, profile[0].password)) {
    const user = profile[0];
    const accesstoken = jwt.sign({ profile: user }, process.env.JWT_SECRET, {
      expiresIn: "2m",
    });
    const refreshtoken = jwt.sign(
      { profile: user },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7 day" }
    );
    res.cookie("jwt", refreshtoken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ token: accesstoken });
  } else return res.status(403).json({ msg: "Invalid Credentials." });
};

const verify = (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) res.sendStatus(401);
    else
      res.json({
        message: "POST created....",
        token: req.token,
        authData,
      });
  });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const doc = await authentication.find({ email });
  if (doc.length === 1) {
    console.log("Valid email.");
    //generate a token and send it via email
    const token = jwt.sign({ email }, process.env.JWT_FORGOT_PASSWORD_SECRET, {
      expiresIn: "10m",
    });
    const link = process.env.SERVER_LINK + "/forgotPassword?token=" + token;
    console.log(link);
  } else console.log("Invalid Email");
  res.status(200).send("Email Sent");
};

const resetPassword = async (req, res) => {
  //verify if token correct
  let flag = true;
  const { token, password, confirmPassword } = req.body;
  if (typeof token === "undefined" || token.length === 0) flag = false;
  jwt.verify(token, process.env.JWT_FORGOT_PASSWORD_SECRET, (err) => {
    if (err) {
      console.log(err);
      flag = false;
    }
  });

  //verify password and confirm password
  if (password !== confirmPassword) {
    console.log("Password and confirm password does not match.");
    flag = false;
  }

  if (flag === false) return res.sendStatus(400);

  // extract payload
  const data = jwt.decode(
    token,
    process.env.JWT_FORGOT_PASSWORD_SECRET,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  //find the document by email and update password field
  const filter = { email: data.email };
  let message = "Password successfully changed.";
  const hashedpassword = await bcrypt.hash(password, 10);
  await authentication
    .findOneAndUpdate(filter, { password: hashedpassword }, { new: true })
    .catch((err) => {
      message = err;
    });

  res.status(200).json({ msg: message });
};

module.exports = {
  getRequest,
  register,
  login,
  verify,
  forgotPassword,
  resetPassword,
};
