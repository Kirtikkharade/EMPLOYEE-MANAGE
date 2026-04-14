package com.example.backend.controller;

import com.example.backend.model.Employee;
import com.example.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    // ✅ GET all employees
    @GetMapping
    public List<Employee> getAll() {
        return service.getAll();
    }

    // ✅ ADD employee
    @PostMapping
    public Employee save(@RequestBody Employee emp) {
        return service.save(emp);
    }

    // ✅ GET by ID
    @GetMapping("/{id}")
    public Employee getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    // ✅ UPDATE
    @PutMapping("/{id}")
    public Employee update(@PathVariable Integer id, @RequestBody Employee emp) {
        return service.update(id, emp);
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
    @GetMapping("/test")
    public String test() {
        return "WORKING";
    }
}