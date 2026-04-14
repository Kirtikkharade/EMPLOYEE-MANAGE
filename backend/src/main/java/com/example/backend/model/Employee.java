package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "employee")   // ✅ match table name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Integer empId;

    private String name;

    private String department;

    private BigDecimal salary;

    private Integer age;

    private String city;

    @Column(name = "joining_date")
    private LocalDate joiningDate;
}