import api from './api';
import type { Department } from '../types';

export const departmentService = {
  // Get all departments
  getAll: async () => {
    const response = await api.get<Department[]>('/departments');
    return response.data;
  },

  // Get department tree (hierarchical)
  getTree: async () => {
    const response = await api.get<Department[]>('/departments/tree');
    return response.data;
  },

  // Get department by ID
  getById: async (id: number) => {
    const response = await api.get<Department>(`/departments/${id}`);
    return response.data;
  },

  // Create new department
  create: async (data: Partial<Department>) => {
    const response = await api.post<Department>('/departments', data);
    return response.data;
  },

  // Update department
  update: async (id: number, data: Partial<Department>) => {
    const response = await api.put<Department>(`/departments/${id}`, data);
    return response.data;
  },

  // Delete department
  delete: async (id: number) => {
    const response = await api.delete(`/departments/${id}`);
    return response.data;
  },

  // Get employees in department
  getEmployees: async (id: number) => {
    const response = await api.get(`/departments/${id}/employees`);
    return response.data;
  }
};
