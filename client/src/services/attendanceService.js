
import axiosClient from './axiosClient';

export const attendanceService = {
  // Get attendance records with filters
  getRecords: async (params) => {
    const response = await axiosClient.get('/attendance', { params });
    return response.data;
  },

  // Check in
  checkIn: async (employee_id, status = 'present') => {
    const response = await axiosClient.post('/attendance/checkin', {
      employee_id,
      status
    });
    return response.data;
  },

  // Check out
  checkOut: async (id, status = 'present') => {
    const response = await axiosClient.post('/attendance/checkout', {
      id,
      status
    });
    return response.data;
  },

  // Update attendance record
  update: async (id, data) => {
    const response = await axiosClient.patch(`/attendance/${id}`, data);
    return response.data;
  }
};
