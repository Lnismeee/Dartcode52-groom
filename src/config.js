/* Dia chi Google Apps Script nhan xac nhan tham du va tra ve loi chuc.

   DUNG CHUNG BANG TINH VOI BAN NHA GAI - quyet dinh ngay 26/10/2026.

   Truoc day dong nay de trong kem mot loi canh bao chua chinh dia chi nay.
   Gio da chon dung chung that, nen ghi lai cho ro - dung doc comment cu nua.

   Hau qua phai biet truoc:
     - Trang Danh Sach Khach Moi cua CA HAI ben deu hien khach ca hai nha
     - Con so "Phan hoi / Se tham du / Tong so nguoi" la cua hai nha cong lai,
       khong phai rieng mot ben
     - So Luu But tren ca hai thiep cung hien chung mot bo loi chuc

   Muon tach rieng ve sau: tao mot bang tinh MOI, dan google-sheet-groom/Code.gs
   vao Apps Script cua no, trien khai dang Ung dung web quyen "Bat ky ai", roi
   thay dia chi o dong duoi - va sua giong het ben guest-admin-groom/src/App.jsx.

   Duong dan nay von cong khai, khach nao mo thiep cung tai ve, nen ghi thang
   vao day - khong can khai bao gi tren GitHub. */
const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbwd5pH5UG1zK0SuTpOOFaZ_rKIJ1F5wrc-d4GGOKq0i-oHF8NDj_nnsGrGe685eNpWA/exec'

export const API_URL = import.meta.env.VITE_API_URL || GOOGLE_SHEETS_URL

/* Dung de an So Luu But khi khong co dia chi */
export const CO_MAY_CHU = Boolean(API_URL)
