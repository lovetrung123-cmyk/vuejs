import api from './api';
import type { LeaveRequest, LeaveBalance, LeaveType } from '../types';

export const leaveService = {
  // Get leave requests
  getRequests: async (params?: {
    employee_id?: number;
    status?: string;
    start_date?: string;
    end_date?: string;
  }) => {
    const response = await api.get<LeaveRequest[]>('/leaves/requests', { params });
    return response.data;
  },

  // Get leave request by ID
  getRequestById: async (id: number) => {
    const response = await api.get<LeaveRequest>(`/leaves/requests/${id}`);
    return response.data;
  },

  // Create leave request
  createRequest: async (data: Partial<LeaveRequest>) => {
    const response = await api.post<LeaveRequest>('/leaves/requests', data);
    return response.data;
  },

  // Update leave request
  updateRequest: async (id: number, data: Partial<LeaveRequest>) => {
    const response = await api.put<LeaveRequest>(`/leaves/requests/${id}`, data);
    return response.data;
  },

  // Approve leave request
  approveRequest: async (id: number) => {
    const response = await api.post(`/leaves/requests/${id}/approve`);
    return response.data;
  },

  // Reject leave request
  rejectRequest: async (id: number, reason?: string) => {
    const response = await api.post(`/leaves/requests/${id}/reject`, { reason });
    return response.data;
  },

  // Get leave balances
  getBalances: async (employee_id: number, year?: number) => {
    const response = await api.get<LeaveBalance[]>(`/leaves/balances/${employee_id}`, {
      params: { year }
    });
    return response.data;
  },

  // Get leave types
  getTypes: async () => {
    const response = await api.get<LeaveType[]>('/leaves/types');
    return response.data;
  }
};
