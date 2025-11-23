import { defineStore } from 'pinia';
import { ref } from 'vue';
import { leaveService } from '../services/leaveService';
import type { LeaveRequest, LeaveBalance, LeaveType } from '../types';

export const useLeaveStore = defineStore('leave', () => {
  const requests = ref<LeaveRequest[]>([]);
  const balances = ref<LeaveBalance[]>([]);
  const types = ref<LeaveType[]>([]);
  const currentRequest = ref<LeaveRequest | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchRequests = async (params?: any) => {
    loading.value = true;
    error.value = null;
    try {
      requests.value = await leaveService.getRequests(params);
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch leave requests';
    } finally {
      loading.value = false;
    }
  };

  const fetchBalances = async (employee_id: number, year?: number) => {
    loading.value = true;
    error.value = null;
    try {
      balances.value = await leaveService.getBalances(employee_id, year);
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch leave balances';
    } finally {
      loading.value = false;
    }
  };

  const fetchTypes = async () => {
    loading.value = true;
    error.value = null;
    try {
      types.value = await leaveService.getTypes();
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch leave types';
    } finally {
      loading.value = false;
    }
  };

  const createRequest = async (data: Partial<LeaveRequest>) => {
    loading.value = true;
    error.value = null;
    try {
      const newRequest = await leaveService.createRequest(data);
      requests.value.unshift(newRequest);
      return newRequest;
    } catch (err: any) {
      error.value = err.message || 'Failed to create leave request';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const approveRequest = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      const result = await leaveService.approveRequest(id);
      const index = requests.value.findIndex(r => r.id === id);
      if (index !== -1) {
        requests.value[index].status = 'approved';
      }
      return result;
    } catch (err: any) {
      error.value = err.message || 'Failed to approve request';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const rejectRequest = async (id: number, reason?: string) => {
    loading.value = true;
    error.value = null;
    try {
      const result = await leaveService.rejectRequest(id, reason);
      const index = requests.value.findIndex(r => r.id === id);
      if (index !== -1) {
        requests.value[index].status = 'rejected';
      }
      return result;
    } catch (err: any) {
      error.value = err.message || 'Failed to reject request';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    requests,
    balances,
    types,
    currentRequest,
    loading,
    error,
    fetchRequests,
    fetchBalances,
    fetchTypes,
    createRequest,
    approveRequest,
    rejectRequest
  };
});
