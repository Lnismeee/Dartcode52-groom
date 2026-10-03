/* Dia chi Google Apps Script cua RIENG BAN NHA TRAI.

   DANG DE TRONG - PHAI DIEN TRUOC KHI DUA TRANG LEN MANG.

   Vi sao de trong chu khong dung tam dia chi cua ban nha gai: hai ban dung
   chung mot dia chi thi khach nha trai bam Gui Xac Nhan se ghi thang vao
   bang tinh nha gai, tron lan hai danh sach, go ra rat met. De trong thi
   form bao loi ngay - thay lien, khong am tham lam hong du lieu.

   Cach lay dia chi: tao mot bang tinh Google MOI, dan file
   google-sheet-groom/Code.gs vao Apps Script cua no, trien khai dang Ung
   dung web voi quyen "Bat ky ai", roi chep duong dan ket thuc bang /exec
   dan vao dong duoi.

   Dia chi nay PHAI giong het dong GOOGLE_SHEETS_URL trong
   guest-admin-groom/src/App.jsx - do la cach hai trang nha trai noi voi nhau. */
const GOOGLE_SHEETS_URL = ''

export const API_URL = import.meta.env.VITE_API_URL || GOOGLE_SHEETS_URL

/* Dung de an So Luu But khi khong co dia chi */
export const CO_MAY_CHU = Boolean(API_URL)
