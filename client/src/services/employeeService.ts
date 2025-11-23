import api from './api';
import type { Employee } from '../types';

export const employeeService = {
  // Get all employees
  getAll: async (params?: { 
    department_id?: number; 
    job_title_id?: number;
    search?: string;
    status?: string;
  }) => {
    const response = await api.get<Employee[]>('/employees', { params });
    return response.data;
  },

  // Get employee by ID
  getById: async (id: number) => {
    const response = await api.get<Employee>(`/employees/${id}`);
    return response.data;
  },

  // Create new employee
  create: async (data: Partial<Employee>) => {
    const response = await api.post<Employee>('/employees', data);
    return response.data;
  },

  // Update employee
  update: async (id: number, data: Partial<Employee>) => {
    const response = await api.put<Employee>(`/employees/${id}`, data);
    return response.data;
  },

  // Delete employee
  delete: async (id: number) => {
    const response = await api.delete(`/employees/${id}`);
    return response.data;
  },

  // Get employee statistics
  getStats: async () => {
    const response = await api.get('/employees/stats');
    return response.data;
  }
};
