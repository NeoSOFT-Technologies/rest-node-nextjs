import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  {
    name: "rohit",
    email: "rohit@email.com",
    username: "rohitUsername",
    password: "rohitPassword",
  },
  {
    name: "deepthi",
    email: "deepthi@email.com",
    username: "deepthiUsername",
    password: "deepthiPassword",
  },
];

const findUser = (username: string, password: string) => {
  for (const user of users) {
    if (user.username === username && user.password === password) {
      return user;
    }
  }
};

const news = ["news 1", "news 2", "news 3"];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const reqPath = req.body.path;
  console.log(req.body);
  if (reqPath === "login") {
    const { username, password } = req.body;
    const user = findUser(username, password);

    if (user) {
      const accessToken = JSON.stringify({ username, email: user.email });
      return res.status(200).json({ user, accessToken });
    }
    return res.status(404).json({ msg: "invalid credentials" });
  } else if (reqPath === "profile") {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(400).json({ msg: "invalid authorization header" });
    }
    const accessToken = authorization.split(" ")[1];
    const payload = JSON.parse(accessToken);
    const user = findUser(payload.username, payload.email);

    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(400).json({ msg: "invalid access token" });
  }

  res.status(200).json({ news });
}
