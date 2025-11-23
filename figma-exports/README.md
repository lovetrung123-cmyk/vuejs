# Figma Exports - HRM System Static HTML/CSS Files

Folder này chứa các file HTML/CSS tĩnh cho tất cả các trang của hệ thống HRM, được tạo ra để sử dụng trong Figma cho mục đích thiết kế.

## 📁 Cấu trúc Folder

```
figma-exports/
├── shared.css                    # CSS chung cho tất cả các trang
│
├── 01-Login/                     # Trang đăng nhập
│   ├── desktop/
│   │   ├── index.html
│   │   └── style.css
│   └── mobile/
│       ├── index.html
│       └── style.css
│
├── 02-Dashboard/                 # Trang Dashboard
├── 03-Employees/                 # Quản lý Nhân viên
├── 04-Departments/               # Quản lý Phòng ban
├── 05-Attendance/                # Quản lý Chấm công
├── 06-Leaves/                    # Quản lý Nghỉ phép
├── 07-Salaries/                  # Quản lý Lương
├── 08-Roles/                     # Quản lý Vai trò
├── 09-JobTitles/                 # Quản lý Chức danh
├── 10-JobFamilies/               # Quản lý Nhóm chức danh
├── 11-EmploymentHistory/         # Lịch sử Công tác
├── 12-WorkShifts/                # Quản lý Ca làm việc
├── 13-WorkSchedules/             # Lên lịch Làm việc
├── 14-SalaryComponents/          # Thành phần Lương
└── 15-EmployeePortal/            # Cổng Nhân viên
```

## 📊 Thống kê

- **Tổng số trang**: 15 trang
- **Phiên bản**: 2 (Desktop + Mobile) cho mỗi trang
- **Tổng số file**: 61 file (60 HTML/CSS + 1 shared.css)

## 🎨 Đặc điểm Thiết kế

### Shared CSS (shared.css)
- **Color Scheme**: Light mode với các biến CSS variables
- **Typography**: Font Inter
- **Components**: Sidebar, Cards, Tables, Forms, Buttons, Badges
- **Layout**: Flexbox và CSS Grid
- **Responsive**: Mobile-first approach

### Sidebar Navigation
Tất cả các trang (trừ Login) đều có sidebar với:
- Logo HRM System
- 14 menu items với icons
- Active state indication (border-left + background)
- Responsive design (hidden trên mobile)

### Common Components
1. **Stats Cards**: Hiển thị số liệu thống kê với icons màu gradient
2. **Tables**: Bảng dữ liệu với hover effects
3. **Forms**: Form inputs với labels và validation styles
4. **Buttons**: Primary, Outline, và Icon buttons
5. **Badges**: Success, Warning, Error, Default variants

## 📱 Phiên bản Desktop vs Mobile

### Desktop (≥1024px)
- Sidebar hiển thị cố định bên trái (256px width)
- Stats grid: 4 cột
- Full search bar trong top bar
- Padding lớn hơn cho các components

### Mobile (<640px)
- Sidebar ẩn (có thể toggle)
- Stats grid: 1 cột
- Search bar ẩn trong top bar
- Padding nhỏ hơn để tối ưu không gian

## 🚀 Cách sử dụng

### Xem trực tiếp trong trình duyệt:
```bash
# Mở bất kỳ file HTML nào trong trình duyệt
# Ví dụ:
open figma-exports/02-Dashboard/desktop/index.html
```

### Import vào Figma:
1. Mở file HTML trong trình duyệt
2. Sử dụng Figma plugin "HTML to Figma" hoặc screenshot
3. Hoặc copy CSS styles để áp dụng cho Figma components

## 🎯 Danh sách Trang

| # | Tên Folder | Tên Trang | Mô tả |
|---|-----------|-----------|-------|
| 01 | Login | Đăng nhập | Trang đăng nhập hệ thống |
| 02 | Dashboard | Dashboard | Tổng quan hệ thống với stats và charts |
| 03 | Employees | Quản lý Nhân viên | Danh sách và quản lý nhân viên |
| 04 | Departments | Quản lý Phòng ban | Cấu trúc tổ chức phòng ban |
| 05 | Attendance | Quản lý Chấm công | Theo dõi chấm công nhân viên |
| 06 | Leaves | Quản lý Nghỉ phép | Yêu cầu và phê duyệt nghỉ phép |
| 07 | Salaries | Quản lý Lương | Bảng lương và thành phần lương |
| 08 | Roles | Quản lý Vai trò | Phân quyền và vai trò người dùng |
| 09 | JobTitles | Quản lý Chức danh | Danh sách chức danh |
| 10 | JobFamilies | Quản lý Nhóm chức danh | Phân loại nhóm chức danh |
| 11 | EmploymentHistory | Lịch sử Công tác | Lịch sử làm việc nhân viên |
| 12 | WorkShifts | Quản lý Ca làm việc | Cấu hình ca làm việc |
| 13 | WorkSchedules | Lên lịch Làm việc | Phân công lịch làm việc |
| 14 | SalaryComponents | Thành phần Lương | Thu nhập và khấu trừ |
| 15 | EmployeePortal | Cổng Nhân viên | Thông tin cá nhân nhân viên |

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #3b82f6        /* Blue */
--success: #10b981        /* Green */
--warning: #f59e0b        /* Orange */
--destructive: #ef4444    /* Red */
--info: #06b6d4           /* Cyan */

/* Neutral Colors */
--background: #f8f9fb     /* Light Gray */
--foreground: #0f172a     /* Dark */
--muted: #e5e7eb          /* Gray */
--border: #e5e7eb         /* Gray */
```

## 📝 Ghi chú

- Tất cả các trang đều sử dụng tiếng Việt
- Icons sử dụng inline SVG từ Feather Icons
- Responsive breakpoints: 640px (mobile), 1024px (desktop)
- CSS Variables cho dễ dàng customization
- Semantic HTML5 markup

## 🔗 Liên kết

- **Ứng dụng Vue.js chính**: Xem folder `client/src/views/`
- **Shared styles**: `figma-exports/shared.css`
- **Design system**: Material Design principles

---

**Tạo bởi**: HRM System Project  
**Ngày tạo**: November 23, 2025  
**Phiên bản**: 1.0.0
