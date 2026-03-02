package com.example.grapher.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Table(name = "users") // Optional: specifies the table name in the DB
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id // 
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments the ID
    private Long id;

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String passwordHash;
}