import api from "./api";
// นำเข้า axios instance ที่ตั้งค่า baseURL ไว้ล่วงหน้าเพื่อเรียก API
const API_URL = import.meta.env.VITE_AUTH_URL;
// ดึง URL ของ backend จาก environment variable (.env) เช่น http://localhost:5000/api/v1/user
import TokenService from "./token.services";
// นำเข้า service สำหรับจัดการ token และข้อมูลผู้ใช้ เช่น การเก็บ, ดึง, ลบจาก localStorage

// ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
const register = async (username, password) => {
  // ส่งข้อมูล username และ password ไปยัง API endpoint /register
  return await api.post(API_URL + "/register", { username, password });
};
// ฟังก์ชันสำหรับเข้าสู่ระบบ
const login = async (username, password) => {
  // const response จะไดรับค่ามาจากรียกใช้ API_URL
  // เรียก API /login เพื่อรับ token และข้อมูลผู้ใช้
  const response = await api.post(API_URL + "/login", { username, password });
  const { status, data } = response;
  // ตรวจสอบว่า response สำเร็จ (status 200)
  if (status === 200) {
    // ถ้ามี accessToken ให้เก็บไว้ใน localStorage ผ่าน TokenService
    if (data?.accessToken) {
      TokenService.setUser(data); //ถ้าขะใช้ต้องมีเงื่อนไข 200
    }
  }

  // คืนค่า response กลับไปให้ component ที่เรียกใช้
  return response;
};

// ฟังก์ชันสำหรับออกจากระบบ
const logout = () => {
  // ลบข้อมูลผู้ใช้และ token ออกจาก localStorage
  TokenService.removeUser();
};
// รวมฟังก์ชันทั้งหมดเป็น object เพื่อ export
const AuthService = {
  register,
  login,
  logout,
};
// นำ AuthService ไปใช้งานใน component อื่นๆ เช่น Register.jsx หรือ Login.jsx
export default AuthService;
