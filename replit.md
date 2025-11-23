# HR Management System (HRM)

## Project Overview
This is a comprehensive Human Resources Management System built with Vue.js 3 frontend and Express.js backend. The application manages employees, departments, roles, attendance, leave requests, and salary information.

## Tech Stack
- **Frontend**: Vue.js 3, Vue Router, Pinia (state management), Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (Neon serverless)
- **ORM**: Drizzle ORM
- **Build Tool**: Vite
- **Language**: JavaScript (Vue components) + TypeScript backends

## Project Structure
```
├── client/              # Vue.js frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── views/       # Page components
│   │   ├── router/      # Vue Router configuration
│   │   ├── services/    # API service layer
│   │   ├── stores/      # Pinia stores
│   │   ├── types/       # Type definitions (JSDoc)
│   │   └── main.js      # Entry point
│   └── index.html
├── server/              # Express.js backend
│   ├── index.ts         # Main server file
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database configuration
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared code
│   └── schema.ts        # Database schema (Drizzle)
└── migrations/          # Database migration files
```

## Database Schema
The system includes the following entities:
- Users (authentication)
- Roles (permissions)
- Departments (organizational structure)
- Job Families & Job Titles
- Employees (core HR data)
- Employment History (position changes)
- Attendance (check-in/check-out tracking)
- Leave Requests (approval workflow)
- Leave Types & Balance
- Work Shifts (shift templates)
- Work Schedules (employee schedules)
- Salary Components & Employee Salary
- Activity Logs

## Frontend Features (Vue.js)
- **Dashboard**: Key metrics and statistics
- **Employee Management**: CRUD operations with detailed profiles
- **Department Management**: Hierarchical structure
- **Role Management**: Permissions and access control
- **Attendance Tracking**: Check-in/check-out with trends
- **Leave Management**: Request workflow with approval
- **Salary Management**: Component management and calculations
- **Job Titles & Families**: Organizational structure
- **Employment History**: Position change tracking
- **Work Shifts**: Shift template management
- **Work Schedules**: Employee schedule planning
- **Employee Portal**: Self-service access to personal data, leave balance, and salary info
- **Responsive UI**: Material Design principles

## Development Setup
1. Dependencies installed via `npm install`
2. Database connection requires `DATABASE_URL` environment variable
3. Run migrations with `npm run db:push`
4. Start development server with `npm run dev` (runs on port 5000)

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (required)
- `NODE_ENV` - Set to 'development' or 'production'
- `PORT` - Server port (default: 5000)

## Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push schema changes to database
- `npm run check` - Run TypeScript type checking

## Recent Changes (2025-11-23)
### Replit Environment Setup (Latest):
1. **Dependencies Installed** - Ran `npm install` to install all required packages
2. **Added Missing Dependency** - Installed `nanoid` package for unique ID generation
3. **Database Setup** - Successfully pushed schema to PostgreSQL using `npm run db:push`
4. **Workflow Configuration** - Set up Development Server workflow on port 5000 with webview output
5. **Deployment Configuration** - Configured autoscale deployment with build and run commands
6. **Verified Application** - Confirmed HRM dashboard loads successfully with Vietnamese UI

### Previous Changes:
1. **Fixed Vite configuration** - Updated server/vite.ts to reference main.js
2. **Converted TypeScript to JavaScript** - All frontend files (services, stores, types) converted to plain JavaScript
3. **Added 7 new pages**:
   - Job Titles Management (`JobTitles.vue`)
   - Job Families Management (`JobFamilies.vue`)
   - Employment History (`EmploymentHistory.vue`)
   - Work Shifts Management (`WorkShifts.vue`)
   - Work Schedules Management (`WorkSchedules.vue`)
   - Salary Components Management (`SalaryComponents.vue`)
   - Employee Portal (`EmployeePortal.vue`)
4. **Updated Router** - Added routes for all new pages
5. **Type Definitions** - Converted TypeScript interfaces to JSDoc format

### Frontend Files Converted (JavaScript):
- `client/src/main.js`
- `client/src/router/index.js`
- `client/src/services/api.js`
- `client/src/services/employeeService.js`
- `client/src/services/departmentService.js`
- `client/src/services/roleService.js`
- `client/src/services/attendanceService.js`
- `client/src/services/leaveService.js`
- `client/src/services/salaryService.js`
- `client/src/stores/employeeStore.js`
- `client/src/stores/departmentStore.js`
- `client/src/stores/attendanceStore.js`
- `client/src/stores/leaveStore.js`
- `client/src/types/index.js`

## User Preferences
- Frontend development priority: Vue.js implementation per project requirements
- Backend is pre-built and not modified by user

## Replit Configuration
- **Port**: Application serves on port 5000 (frontend and backend unified)
- **Host**: 0.0.0.0 for frontend (configured in vite.config.ts)
- **Deployment**: Autoscale deployment configured with build and production start commands
- **Database**: PostgreSQL (Helium) provisioned and schema pushed successfully

## Known Issues
- Minor TypeScript type warnings in Drizzle ORM queries (non-critical, doesn't affect functionality)
- Vue warnings about `data-testid` attribute forwarding in BaseModal component (non-critical)

## Next Steps
- Connect new pages to backend APIs
- Implement data persistence for all forms
- Add validation and error handling
- Complete Employee Portal functionality
