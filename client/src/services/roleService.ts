import api from './api';
import type { Role, User } from '../types';

export const roleService = {
  // Get all roles
  getAll: async () => {
    const response = await api.get<Role[]>('/roles');
    return response.data;
  },

  // Get role by ID
  getById: async (id: number) => {
    const response = await api.get<Role>(`/roles/${id}`);
    return response.data;
  },

  // Create role
  create: async (data: Partial<Role>) => {
    const response = await api.post<Role>('/roles', data);
    return response.data;
  },

  // Update role
  update: async (id: number, data: Partial<Role>) => {
    const response = await api.put<Role>(`/roles/${id}`, data);
    return response.data;
  },

  // Delete role
  delete: async (id: number) => {
    const response = await api.delete(`/roles/${id}`);
    return response.data;
  },

  // Get users with specific role
  getUsersByRole: async (role_id: number) => {
    const response = await api.get<User[]>(`/roles/${role_id}/users`);
    return response.data;
  },

  // Assign role to user
  assignRole: async (user_id: number, role_id: number) => {
    const response = await api.post('/roles/assign', { user_id, role_id });
    return response.data;
  }
};
