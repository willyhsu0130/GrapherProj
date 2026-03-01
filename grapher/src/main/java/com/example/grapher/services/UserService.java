package com.example.grapher.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.grapher.models.User;
import com.example.grapher.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createNewUser(User user) {
        System.out.println(user);
        return userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        // Using your custom method
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found!"));
    }

    public List<User> getByLastName(String name) {
        return userRepository.findByLastNameIgnoreCase(name);
    }
}