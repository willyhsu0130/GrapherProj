package com.example.grapher.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.grapher.models.LoginRequest;
import com.example.grapher.models.SignupRequest;
import com.example.grapher.models.User;
import com.example.grapher.models.UserResponse;
import com.example.grapher.services.JwtService;
import com.example.grapher.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    @Autowired
    public UserController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @GetMapping("/signup")
    public String testPage() {
        return "<html><body><h1>Controller is working!</h1><p>Connected to Supabase.</p></body></html>";
    }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody SignupRequest request) {
        try {

            User created = userService.createNewUser(request);
            UserResponse response = UserResponse.builder()
                    .username(created.getUsername())
                    .email(created.getEmail())
                    .firstName(created.getFirstName())
                    .lastName(created.getLastName())
                    .token(jwtService.generateToken(created))
                    .build();
            return ResponseEntity.ok(response);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }

        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = userService.login(request);
            UserResponse response = UserResponse.builder()
                    .username(user.getUsername())
                    .email(user.getEmail())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .token(jwtService.generateToken(user))
                    .build();
            return ResponseEntity.ok(response);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
        catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }
}