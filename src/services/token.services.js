import { Cookies } from "react-cookie";
// นำเข้าไลบรารี react-cookie เพื่อจัดการ cookie
const cookie = new Cookies();
//สร้าง instance ของ Cookies เพื่อให้จัดการ Cookie ได้

//ฟังก์ชันเพื่อดึง accessToken จาก cookie
const getAccessToken = () => {
  const user = getUser();
  // เรียกฟังก์ชั่น getUser ดึงข้อมูลผู้ใช้จาก cookie
  return user?.accessToken; //ถ้ายังไม่รู้ ให้ใส่ ? ไว้ก่อน
};

const getUser = () => {
  const user = cookie.get("user");
  return user;
};

const removeUser = () => {
  cookie.remove("user", { path: "/" });
};

const setUser = (user) => {
  if(user){
    //ถ้ามี user ให้ตัเซ็ต Cookie
    cookie.set(
      "user",
      JSON.stringify({
        id: user.id,
        username: user.username,
        accessToken: user.accessToken,
      }),
      {
        path: "/",
        expires: new Date(Date.now() + 86400), //24*60*60 = 1 day
      }
    );
  }else {
    removeUser();
  }
};
// สร้าง Class และ สร้าง ฟังก์ชั่นไว้
const TokenService = {
  getAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
