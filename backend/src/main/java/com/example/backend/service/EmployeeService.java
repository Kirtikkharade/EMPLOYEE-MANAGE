package com.example.backend.service;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    // ✅ Get all employees
    public List<Employee> getAll() {
        return repository.findAll();
    }

    // ✅ Save employee
    public Employee save(Employee employee) {
        return repository.save(employee);
    }

    // ✅ Get employee by ID
    public Employee getById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    // ✅ Delete employee
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    // ✅ Update employee
    public Employee update(Integer id, Employee newEmployee) {
        Employee emp = repository.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(newEmployee.getName());
            emp.setDepartment(newEmployee.getDepartment());
            emp.setSalary(newEmployee.getSalary());
            emp.setAge(newEmployee.getAge());
            emp.setCity(newEmployee.getCity());
            emp.setJoiningDate(newEmployee.getJoiningDate());

            return repository.save(emp);
        }

        return null;
    }
}