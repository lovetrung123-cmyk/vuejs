// HRM System Type Definitions based on Database Schema

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role_id: number;
  remember_token?: string;
  created_at?: string;
  updated_at?: string;
  role?: Role;
}

export interface Role {
  id: number;
  code: string;
  name: string;
  description?: string;
  permissions?: any;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Department {
  id: number;
  code: string;
  name: string;
  manager_id?: number;
  parent_id?: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
  manager?: Employee;
  parent?: Department;
  children?: Department[];
  employees?: Employee[];
}

export interface JobTitle {
  id: number;
  code: string;
  name: string;
  job_level: 'entry' | 'junior' | 'senior' | 'lead' | 'manager' | 'director' | 'executive';
  job_family_id?: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
  job_family?: JobFamily;
}

export interface JobFamily {
  id: number;
  code: string;
  name: string;
  description?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Employee {
  id: number;
  code: string;
  user_id?: number;
  full_name: string;
  gender?: 'M' | 'F' | 'O';
  dob?: string;
  personal_email?: string;
  personal_phone?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  id_number?: string;
  id_issue_date?: string;
  id_issue_place?: string;
  tax_number?: string;
  insurance_number?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
  user?: User;
  current_position?: EmploymentHistory;
  department?: Department;
  job_title?: JobTitle;
}

export interface EmploymentHistory {
  id: number;
  employee_id: number;
  department_id: number;
  job_title_id: number;
  start_date: string;
  end_date?: string;
  salary?: number;
  work_location?: 'head_office' | 'branch_1' | 'branch_2' | 'remote';
  employment_type?: 'full_time' | 'part_time' | 'contract' | 'intern';
  employment_status?: 'active' | 'probation' | 'suspended' | 'inactive';
  report_to?: number;
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
  department?: Department;
  job_title?: JobTitle;
}

export interface LeaveType {
  id: number;
  code: string;
  name: string;
  category: 'annual' | 'sick' | 'maternity' | 'paternity' | 'unpaid' | 'other';
  paid: boolean;
  max_days: number;
  accrual_rate?: number;
  carry_over_days: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface LeaveBalance {
  id: number;
  employee_id: number;
  leave_type_id: number;
  year: number;
  total_entitled: number;
  used: number;
  remaining: number;
  carried_over: number;
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
  leave_type?: LeaveType;
}

export interface LeaveRequest {
  id: number;
  employee_id: number;
  leave_type_id: number;
  start_date: string;
  end_date: string;
  total_days: number;
  reason?: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'cancelled';
  approved_by?: number;
  approved_at?: string;
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
  leave_type?: LeaveType;
  approver?: User;
}

export interface WorkShift {
  id: number;
  code: string;
  name: string;
  start_time: string;
  end_time: string;
  break_minutes: number;
  total_hours?: number;
  is_default: boolean;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface WorkSchedule {
  id: number;
  employee_id: number;
  work_date: string;
  shift_id: number;
  actual_start_time?: string;
  actual_end_time?: string;
  total_hours?: number;
  overtime_hours?: number;
  status?: 'scheduled' | 'present' | 'absent' | 'late' | 'half_day';
  note?: string;
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
  shift?: WorkShift;
}

export interface AttendanceRecord {
  id: number;
  employee_id: number;
  record_date: string;
  check_in_time?: string;
  check_out_time?: string;
  total_work_hours?: number;
  late_minutes?: number;
  early_leave_minutes?: number;
  overtime_hours?: number;
  status: 'present' | 'absent' | 'late' | 'half_day' | 'holiday';
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
}

export interface SalaryComponent {
  id: number;
  code: string;
  name: string;
  type: 'earning' | 'deduction';
  category: 'basic' | 'allowance' | 'bonus' | 'tax' | 'insurance' | 'other';
  is_taxable: boolean;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface EmployeeSalary {
  id: number;
  employee_id: number;
  salary_component_id: number;
  amount: number;
  effective_date: string;
  end_date?: string;
  created_at?: string;
  updated_at?: string;
  employee?: Employee;
  salary_component?: SalaryComponent;
}

export interface ActivityLog {
  id: number;
  table_name: string;
  record_id: number;
  action: 'create' | 'update' | 'delete' | 'view';
  by_user_id?: number;
  at: string;
  old_values?: any;
  new_values?: any;
  ip_address?: string;
  user_agent?: string;
  user?: User;
}

// Statistics and Dashboard Types
export interface DashboardStats {
  totalEmployees: number;
  activeDepartments: number;
  pendingLeaves: number;
  todayAttendance: {
    present: number;
    absent: number;
    late: number;
  };
}

export interface AttendanceTrend {
  date: string;
  present: number;
  absent: number;
  late: number;
}

export interface LeaveTrend {
  month: string;
  approved: number;
  pending: number;
  rejected: number;
}
