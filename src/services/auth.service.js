import http from "../http-common";

const login = (data) => {
  return http
    .post("/login", data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      return res.data;
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  logout,
};
