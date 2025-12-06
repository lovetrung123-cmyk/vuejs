
import axiosClient from './axiosClient';

export const leaveService = {
  // Get leave types
  getTypes: async () => {
    const response = await axiosClient.get('/leave-types');
    return response.data;
  },

  // Get leave balances for employee
  getBalances: async (employee_id) => {
    const response = await axiosClient.get(`/leave-balances/${employee_id}`);
    return response.data;
  },

  // Get leave requests with filters
  getRequests: async (params) => {
    const response = await axiosClient.get('/leave-requests', { params });
    return response.data;
  },

  // Create leave request
  createRequest: async (data) => {
    const response = await axiosClient.post('/leave-requests', data);
    return response.data;
  },

  // Update leave request (approve/reject)
  updateRequest: async (id, data) => {
    const response = await axiosClient.patch(`/leave-requests/${id}`, data);
    return response.data;
  },

  // Approve leave request
  approveRequest: async (id, approved_by) => {
    const response = await axiosClient.patch(`/leave-requests/${id}`, {
      status: 'approved',
      approved_by,
      approved_at: new Date().toISOString()
    });
    return response.data;
  },

  // Reject leave request
  rejectRequest: async (id, approved_by) => {
    const response = await axiosClient.patch(`/leave-requests/${id}`, {
      status: 'rejected',
      approved_by,
      approved_at: new Date().toISOString()
    });
    return response.data;
  }
};
