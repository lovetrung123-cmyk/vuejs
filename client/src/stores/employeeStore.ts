import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { employeeService } from '../services/employeeService';
import type { Employee } from '../types';

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([]);
  const currentEmployee = ref<Employee | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const activeEmployees = computed(() => 
    employees.value.filter(e => 
      e.current_position?.employment_status === 'active'
    )
  );

  const fetchEmployees = async (params?: any) => {
    loading.value = true;
    error.value = null;
    try {
      employees.value = await employeeService.getAll(params);
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch employees';
    } finally {
      loading.value = false;
    }
  };

  const fetchEmployeeById = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      currentEmployee.value = await employeeService.getById(id);
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch employee';
    } finally {
      loading.value = false;
    }
  };

  const createEmployee = async (data: Partial<Employee>) => {
    loading.value = true;
    error.value = null;
    try {
      const newEmployee = await employeeService.create(data);
      employees.value.push(newEmployee);
      return newEmployee;
    } catch (err: any) {
      error.value = err.message || 'Failed to create employee';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const updateEmployee = async (id: number, data: Partial<Employee>) => {
    loading.value = true;
    error.value = null;
    try {
      const updated = await employeeService.update(id, data);
      const index = employees.value.findIndex(e => e.id === id);
      if (index !== -1) {
        employees.value[index] = updated;
      }
      if (currentEmployee.value?.id === id) {
        currentEmployee.value = updated;
      }
      return updated;
    } catch (err: any) {
      error.value = err.message || 'Failed to update employee';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const deleteEmployee = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await employeeService.delete(id);
      employees.value = employees.value.filter(e => e.id !== id);
    } catch (err: any) {
      error.value = err.message || 'Failed to delete employee';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    employees,
    currentEmployee,
    loading,
    error,
    activeEmployees,
    fetchEmployees,
    fetchEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
  };
});
