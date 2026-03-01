package com.example.grapher.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.grapher.models.User;
import com.example.grapher.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/signup")
    public String testPage() {
        return "<html><body><h1>Controller is working!</h1><p>Connected to Supabase.</p></body></html>";
    }

    @PostMapping("/signup")
    public User createUser(@RequestBody User user) {
       
        return userService.createNewUser(user);
    }
}