import api from './api';
import type { EmployeeSalary, SalaryComponent } from '../types';

export const salaryService = {
  // Get employee salary details
  getEmployeeSalary: async (employee_id: number) => {
    const response = await api.get<EmployeeSalary[]>(`/salaries/employee/${employee_id}`);
    return response.data;
  },

  // Get all salary components
  getComponents: async () => {
    const response = await api.get<SalaryComponent[]>('/salaries/components');
    return response.data;
  },

  // Create salary component for employee
  createEmployeeSalary: async (data: Partial<EmployeeSalary>) => {
    const response = await api.post<EmployeeSalary>('/salaries/employee', data);
    return response.data;
  },

  // Update salary component
  updateEmployeeSalary: async (id: number, data: Partial<EmployeeSalary>) => {
    const response = await api.put<EmployeeSalary>(`/salaries/employee/${id}`, data);
    return response.data;
  },

  // Delete salary component
  deleteEmployeeSalary: async (id: number) => {
    const response = await api.delete(`/salaries/employee/${id}`);
    return response.data;
  },

  // Calculate total salary
  calculateTotal: async (employee_id: number, date?: string) => {
    const response = await api.get(`/salaries/calculate/${employee_id}`, {
      params: { date }
    });
    return response.data;
  }
};
