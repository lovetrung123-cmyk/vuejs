import api from './api';
import type { AttendanceRecord, AttendanceTrend } from '../types';

export const attendanceService = {
  // Get attendance records
  getRecords: async (params?: {
    employee_id?: number;
    start_date?: string;
    end_date?: string;
    status?: string;
  }) => {
    const response = await api.get<AttendanceRecord[]>('/attendance', { params });
    return response.data;
  },

  // Get attendance by ID
  getById: async (id: number) => {
    const response = await api.get<AttendanceRecord>(`/attendance/${id}`);
    return response.data;
  },

  // Check in
  checkIn: async (employee_id: number) => {
    const response = await api.post('/attendance/check-in', { employee_id });
    return response.data;
  },

  // Check out
  checkOut: async (employee_id: number) => {
    const response = await api.post('/attendance/check-out', { employee_id });
    return response.data;
  },

  // Get attendance trends
  getTrends: async (params?: { start_date?: string; end_date?: string }) => {
    const response = await api.get<AttendanceTrend[]>('/attendance/trends', { params });
    return response.data;
  },

  // Get today's attendance summary
  getTodaySummary: async () => {
    const response = await api.get('/attendance/today');
    return response.data;
  }
};
