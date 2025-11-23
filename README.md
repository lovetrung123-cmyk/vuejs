# BÁO CÁO DỰ ÁN QUẢN LÝ NHÂN SỰ (HRM)

**Trường Cao Đẳng Thực Hành FPT - Biên Hòa 2025**

---

## LỜI MỞ ĐẦU

Trong thời đại công nghệ phát triển nhanh chóng, quản trị nhân sự không còn dừng lại ở việc lưu trữ hồ sơ thủ công trên các tệp Excel phân tán. Quản lý nguồn nhân lực (HRM) đòi hỏi một hệ thống số hoá, đồng bộ, an toàn và có khả năng tự động hoá quy trình.

Việc áp dụng các nền tảng web vào quản lý nhân sự giúp tối ưu hóa các quy trình nghiệp vụ phức tạp: từ việc quản lý hồ sơ nhân viên, theo dõi chấm công, phê duyệt nghỉ phép, cho đến việc thực thi các chu kỳ đánh giá hiệu suất và tính toán lương, thưởng. Một hệ thống tập trung giúp chuẩn hóa dữ liệu, giảm sai sót thủ công, tăng cường bảo mật và cung cấp cho ban lãnh đạo cái nhìn tổng quan để hỗ trợ ra quyết định.

---

## PHẦN 1: GIỚI THIỆU ĐỀ TÀI

### 1.1. Bối Cảnh và Lý Do Chọn Đề Tài

Trong bối cảnh chuyển đổi số, bài toán quản lý nhân sự (HRM) tại các đơn vị vừa và nhỏ vẫn thường đối mặt với nhiều thách thức:

- **Dữ liệu phân tán**: Hồ sơ nhân viên, lịch sử công tác, thông tin nghỉ phép thường được lưu rải rác trên nhiều tệp Excel, gây khó khăn cho việc tổng hợp và báo cáo.
- **Quy trình thủ công**: Các quy trình như duyệt nghỉ phép, đăng ký ca làm việc, hoặc tổng hợp bảng công cuối tháng thường diễn ra bán thủ công qua email hoặc giấy tờ, gây lãng phí thời gian và khó truy vết.
- **Thiếu nhất quán và sai lệch**: Việc tổng hợp dữ liệu từ nhiều nguồn dễ dẫn đến sai sót, đặc biệt khi tính toán số ngày công, ngày phép còn lại.
- **Rủi ro bảo mật**: Chia sẻ các tệp tin nhạy cảm (như thông tin cá nhân, lương cơ bản) qua các kênh không được kiểm soát có thể gây lộ lọt thông tin.

### 1.2. Mục Tiêu, Phạm Vi và Kết Quả Mong Đợi

#### 1.2.1. Mục Tiêu Tổng Quát

- Xây dựng một website quản lý nhân sự tập trung, có kiến trúc rõ ràng, dễ bảo trì, đảm bảo tính toàn vẹn và bảo mật dữ liệu nhân viên.
- Cung cấp trải nghiệm người dùng trực quan, tự động hoá các quy trình nghiệp vụ lặp lại (ví dụ: quy trình phê duyệt nghỉ phép), và hỗ trợ truy xuất dữ liệu nhanh.

#### 1.2.2. Mục Tiêu Cụ Thể (Functional & Non-functional)

**Quản lý Hệ thống & Phân quyền:**
- Quản lý tài khoản đăng nhập (users)
- Quản lý vai trò và phân quyền (roles)
- Ghi nhận nhật ký thay đổi dữ liệu (activity_logs)

**Quản lý Cơ cấu tổ chức:**
- Quản lý danh mục phòng ban, có phân cấp cha-con (departments)
- Quản lý danh mục chức danh (job_titles) và nhóm chức danh (job_families)

**Quản lý Hồ sơ Nhân sự (Core HR):**
- Quản lý thông tin cá nhân chi tiết của nhân viên (employees)
- Quản lý và lưu trữ lịch sử công tác (employment_histories): phòng ban, chức danh, trạng thái làm việc, loại hợp đồng, lương cơ bản theo từng thời kỳ

**Quản lý Thời gian (Time & Attendance):**
- Quản lý danh mục các loại nghỉ phép (leave_types)
- Quản lý số dư phép hàng năm của nhân viên (leave_balances)
- Xử lý quy trình xin nghỉ phép: tạo đơn, chờ duyệt, đã duyệt/từ chối (leave_requests)
- Quản lý danh mục ca làm việc (work_shifts)
- Lên lịch làm việc chi tiết theo ngày cho nhân viên (work_schedules)
- Ghi nhận dữ liệu chấm công thực tế: check-in/out (attendance_records)

**Quản lý Thiết lập Lương (Salary Configuration):**
- Quản lý danh mục các thành phần lương: thu nhập, khấu trừ (salary_components)
- Gán các thành phần lương cố định cho nhân viên theo ngày hiệu lực (employee_salaries)

#### 1.2.3. Phạm Vi Thực Hiện

**Trong phạm vi:**
- Các nghiệp vụ HRM cốt lõi đã nêu, tập trung sâu vào quản lý hồ sơ và quản lý thời gian (chấm công, nghỉ phép)
- Dữ liệu mẫu phục vụ kiểm thử và demo quy trình

**Ngoài phạm vi:**
- Quy trình tính lương hàng tháng (Payroll Run) và phát hành phiếu lương (Payslip)
- Module Quản lý Đánh giá hiệu suất (Performance Management)
- Module Quản lý Tuyển dụng (Recruitment) và Đào tạo (Training)
- Tích hợp máy chấm công vật lý

#### 1.2.4. Đánh Giá Đề Tài (5 Tiêu Chí)

**1. Tính Mới Mẻ/Độc Đáo**
- Không chỉ áp dụng kiến trúc MVC và cơ sở dữ liệu quan hệ chuẩn 3NF, hệ thống còn hướng đến khả năng mở rộng trong tương lai như tách lớp API, đồng bộ với thiết bị chấm công, tích hợp dashboard thời gian thực
- Module quản lý thời gian mô tả được ca làm việc linh hoạt, ca xoay, làm thêm giờ, tăng ca cuối tuần
- Giao diện web được thiết kế thân thiện cho cả hai nhóm người dùng là phòng nhân sự và nhân viên

**2. Tính Thực Tiễn**
- Phù hợp với bối cảnh nhiều doanh nghiệp vừa và nhỏ cần số hóa quy trình nhân sự nhưng chi phí cao
- Hệ thống có thể triển khai nội bộ với chi phí hạ tầng thấp
- Tự động hoá khâu chấm công, tính phép, tính số giờ làm thêm giúp giảm sai sót về lương và ngày công
- Hỗ trợ trích xuất báo cáo cho ban lãnh đạo, thống kê tình hình nghỉ phép và đi muộn

**3. Tính Kế Thừa**
- Được xây dựng dựa trên các quy trình nghiệp vụ nhân sự đã được chuẩn hóa
- Người dùng dễ dàng chuyển đổi từ cách làm thủ công sang trên phần mềm
- Cấu trúc CSDL ưu tiên tính mở rộng, cho phép bổ sung thêm các phân hệ khác sau này

**4. Tính Cân Bằng**
- Phân bổ tương đối đều cho bốn khối nghiệp vụ chính: hồ sơ, tổ chức, chấm công, nghỉ phép
- Thể hiện cái nhìn toàn diện về hệ thống quản lí nhân sự
- Cân nhắc giữa mức độ chi tiết và khả năng triển khai

**5. Tính Đạo Đức**
- Khi xử lý thông tin nhạy cảm như dữ liệu cá nhân, lịch sử công tác, mức lương, hệ thống đề cao nguyên tắc bảo mật và phân quyền
- Cơ chế phân quyền chi tiết cho các vai trò khác nhau
- Ghi nhận nhật ký truy cập và các thao tác quan trọng để audit

#### 1.2.5. Đối Tượng Sử Dụng

Hệ thống được thiết kế cho 4 vai trò chính:

1. **Admin (Quản trị hệ thống)**: Cấu hình hệ thống, quản lý vai trò, quản lý các danh mục lõi (phòng ban, chức danh, loại phép)

2. **HR (Bộ phận Nhân sự)**: Quản lý toàn bộ hồ sơ nhân viên và lịch sử công tác, quản lý lịch làm việc và chấm công, theo dõi tổng quan nghỉ phép

3. **Manager (Quản lý cấp trung)**: Phê duyệt các yêu cầu nghỉ phép của nhân viên, xem lịch làm việc của bộ phận

4. **Staff (Nhân viên)**: Xem thông tin cá nhân, tạo đơn xin nghỉ phép, xem số dư phép và lịch làm việc của bản thân

#### 1.2.6. Phương Pháp & Công Cụ Triển Khai

**Quy trình:** Agile tinh gọn theo vòng lặp (phân tích → thiết kế (ERD) → lập trình → kiểm thử)

**Công cụ:**
- Thiết kế/Mockup: Figma
- Thiết kế CSDL: dbdiagram.io
- Quản lý mã nguồn: GitHub

**Công nghệ:**
- **Backend**: PHP/Laravel
- **Frontend**: VueJS kết hợp với Axios gọi API
- **Database**: MySQL

---

## PHẦN 2: PHÂN TÍCH YÊU CẦU

### 2.1. Khảo Sát Nghiệp Vụ

Phân tích nghiệp vụ của dự án được thực hiện dựa trên cấu trúc CSDL được thiết kế. Hệ thống tập trung vào việc chuẩn hóa và quản lý dữ liệu nhân sự một cách chi tiết, đặc biệt là các nghiệp vụ liên quan đến lịch sử công tác và quản lý thời gian.

### 2.2. Phân Rã Chức Năng (Use Cases)

**Module 1: Hệ thống & Phân quyền (Tác nhân: Admin)**
- Quản lý vai trò: Tạo/sửa/vô hiệu hóa vai trò
- Quản lý người dùng: Tạo tài khoản, gán email, mật khẩu, vai trò
- Xem nhật ký hệ thống: Tra cứu lịch sử thay đổi dữ liệu

**Module 2: Quản lý Cơ cấu tổ chức (Tác nhân: Admin/HR)**
- Quản lý phòng ban: Tạo/sửa/xoá, thiết lập quan hệ cha-con
- Quản lý chức danh: Tạo/sửa/xoá chức danh và nhóm chức danh

**Module 3: Quản lý Hồ sơ Nhân sự (Tác nhân: HR)**
- Tạo hồ sơ nhân viên: Nhập thông tin cá nhân, gán tài khoản người dùng
- Quản lý lịch sử công tác: Ghi nhận giai đoạn làm việc, vị trí, trạng thái, lương cơ bản

**Module 4: Quản lý Thời gian (Tác nhân: HR, Manager, Employee)**
- Thiết lập ca làm việc: Tạo các ca làm việc với thời gian bắt đầu, kết thúc
- Sắp xếp lịch làm việc: Gán ca làm việc cho nhân viên theo ngày
- Ghi nhận chấm công: Nhập/Import dữ liệu check-in/out
- Quản lý nghỉ phép: Xem số dư, tạo đơn xin, phê duyệt

**Module 5: Quản lý Thiết lập Lương (Tác nhân: HR/Payroll Admin)**
- Quản lý thành phần lương: Tạo/sửa các loại thu nhập, khấu trừ
- Gán lương cho nhân viên: Chỉ định các khoản lương cố định với ngày hiệu lực

### 2.3. Yêu Cầu Phi Chức Năng

- **Hiệu năng**: Tải trang và truy vấn danh sách phải phản hồi dưới 2 giây
- **Bảo mật**: Mật khẩu được hash, phân quyền truy cập nghiêm ngặt dựa trên roles
- **Tính toàn vẹn dữ liệu**: Sử dụng khóa ngoại (Foreign Keys), ràng buộc unique
- **Khả năng mở rộng**: Kiến trúc MVC rõ ràng, CSDL chuẩn 3NF
- **Nhật ký**: activity_logs ghi lại các thay đổi quan trọng

---

## PHẦN 3: THIẾT KẾ ỨNG DỤNG

### 3.1. Thiết Kế Mô Hình Dữ Liệu (ERD)

Mô hình dữ liệu quan hệ (ERD) được thiết kế theo chuẩn 3NF. Các thực thể (bảng) được nhóm theo các module nghiệp vụ:

**Nhóm 1: Hệ thống & Phân quyền**
- `users`: Thông tin đăng nhập và role_id
- `roles`: Vai trò và quyền hạn
- `activity_logs`: Nhật ký các hành động

**Nhóm 2: Cơ cấu tổ chức**
- `departments`: Danh mục phòng ban (hỗ trợ cấu trúc cây)
- `job_titles`: Danh mục chức danh
- `job_families`: Danh mục nhóm chức danh

**Nhóm 3: Hồ sơ nhân viên**
- `employees`: Thông tin cá nhân nhân viên
- `employment_histories`: Lịch sử công tác

**Nhóm 4: Quản lý Thời gian & Chấm công**
- `leave_types`: Danh mục loại nghỉ phép
- `leave_balances`: Số dư phép của nhân viên
- `leave_requests`: Đơn xin nghỉ phép
- `work_shifts`: Danh mục ca làm việc
- `work_schedules`: Bảng phân công
- `attendance_records`: Dữ liệu chấm công thực tế

**Nhóm 5: Quản lý Thiết lập Lương**
- `salary_components`: Danh mục thành phần lương
- `employee_salaries`: Gán lương cho nhân viên

### 3.2. Cấu Trúc Thư Mục Dự Án

```
├── app/                       # PHP/Laravel backend
│   ├── Http/Controllers/      # Controllers (xử lý logic)
│   ├── Models/                # Models (tương tác với DB)
│   └── Requests/              # Form requests (xác thực)
├── database/
│   ├── migrations/            # Tệp di chuyển cơ sở dữ liệu
│   └── seeders/               # Dữ liệu mẫu
├── resources/
│   └── views/                 # Blade templates (nếu cần)
├── routes/
│   └── api.php                # Định nghĩa API routes
├── frontend/                  # Vue.js frontend
│   ├── src/
│   │   ├── components/        # Các component Vue tái sử dụng
│   │   ├── views/             # Các trang chính
│   │   ├── router/            # Cấu hình Vue Router
│   │   ├── services/          # API service (Axios)
│   │   └── main.js            # Entry point
│   ├── index.html
│   └── package.json
├── figma-exports/             # Tệp HTML/CSS tĩnh cho thiết kế
├── .env                       # Biến môi trường
└── composer.json              # Phụ thuộc PHP/Laravel
```

---

## CÔNG NGHỆ STACK

| Thành Phần | Công Nghệ |
|-----------|----------|
| Frontend | Vue.js, Axios (gọi API) |
| Styling | Tailwind CSS, Radix UI Components |
| Backend | PHP/Laravel |
| Database | MySQL |
| Mô hình kiến trúc | MVC (Model-View-Controller) |
| Database Design | Chuẩn 3NF (Third Normal Form) |

---

## HƯỚNG DẪN CÀI ĐẶT & CHẠY

### Yêu Cầu
- **Backend**: PHP 8.0+, Composer, Laravel 10+
- **Frontend**: Node.js 16+, npm hoặc yarn
- **Database**: MySQL 5.7+ hoặc MariaDB 10.3+

### Các Bước Cài Đặt Backend (PHP/Laravel)

1. **Cài đặt dependencies**
   ```bash
   composer install
   ```

2. **Tạo file .env**
   ```bash
   cp .env.example .env
   ```

3. **Thiết lập biến môi trường**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=hrm_system
   DB_USERNAME=root
   DB_PASSWORD=
   APP_KEY=base64:...
   ```

4. **Sinh Application Key**
   ```bash
   php artisan key:generate
   ```

5. **Chạy migrations (tạo bảng)**
   ```bash
   php artisan migrate
   ```

6. **Seed dữ liệu mẫu (tùy chọn)**
   ```bash
   php artisan db:seed
   ```

7. **Khởi động Laravel development server**
   ```bash
   php artisan serve
   ```
   Backend chạy trên: **http://localhost:8000**

### Các Bước Cài Đặt Frontend (Vue.js)

1. **Vào thư mục frontend**
   ```bash
   cd frontend
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Khởi động development server**
   ```bash
   npm run dev
   ```
   Frontend chạy trên: **http://localhost:5173** (hoặc port mặc định)

### Các Lệnh Chủ Yếu

**Backend (Laravel):**
```bash
php artisan serve              # Khởi động development server
php artisan migrate            # Chạy migrations
php artisan db:seed            # Seed dữ liệu
php artisan tinker             # Artisan interactive shell
php artisan make:controller    # Tạo controller
php artisan make:model         # Tạo model
```

**Frontend (Vue.js):**
```bash
npm run dev                    # Development server với hot reload
npm run build                  # Build cho production
npm run preview                # Preview production build
```

---

## TÍNH NĂNG CHÍNH

✅ Quản lý Nhân viên (CRUD đầy đủ)
✅ Quản lý Phòng ban (cấu trúc phân cấp)
✅ Quản lý Vai trò & Phân quyền
✅ Quản lý Chức danh & Nhóm chức danh
✅ Chấm công & Lịch làm việc
✅ Quản lý Nghỉ phép (yêu cầu, phê duyệt)
✅ Quản lý Lương (thành phần, thiết lập)
✅ Nhân viên Portal (tự phục vụ)
✅ Dashboard với thống kê
✅ Xác thực & Phân quyền

---

## TRẠNG THÁI DỰ ÁN

- ✅ Database schema (ERD) thiết kế hoàn thiện
- ✅ Backend Laravel (API endpoints) cần hoàn thiện
- ✅ Frontend Vue.js với Axios cần hoàn thiện
- ✅ Responsive UI (desktop & mobile) thiết kế
- 🔄 Kết nối API frontend-backend
- 🔄 Dữ liệu mẫu cho demo (seeders)
- 🔄 Xác thực & Phân quyền

---

## LỖI BIẾT VÀ HẠN CHẾ

- Các cảnh báo Vue nhỏ về thuộc tính `data-testid` (không ảnh hưởng chức năng)
- Cảnh báo kiểu dữ liệu Drizzle ORM nhỏ (không ảnh hưởng)

---

## BẢOẤT & TRUY CẬP

- ✅ Xác thực dựa trên session (Laravel sessions)
- ✅ Mã hóa mật khẩu (bcrypt Laravel)
- ✅ RBAC (Role-Based Access Control)
- ✅ MySQL connection pooling
- ✅ Nhật ký hoạt động (activity_logs)

---

## PHÁT TRIỂN TIẾP

- [ ] Hoàn thành tính tính lương hàng tháng (Payroll Run)
- [ ] Phát hành phiếu lương (Payslip)
- [ ] Module Đánh giá hiệu suất
- [ ] Module Tuyển dụng
- [ ] Tích hợp máy chấm công vật lý
- [ ] Dashboard thời gian thực

---

**Phiên bản**: 1.0.0  
**Cập nhật**: November 23, 2025  
**License**: MIT  
**Trường**: Cao Đẳng Thực Hành FPT Biên Hòa
