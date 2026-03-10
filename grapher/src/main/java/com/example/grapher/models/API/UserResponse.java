package com.example.grapher.models.API;

import lombok.Builder;
import lombok.Data;

@Data
@Builder

public class UserResponse {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String token;
}
