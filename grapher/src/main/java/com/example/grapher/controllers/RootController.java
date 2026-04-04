package com.example.grapher.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/grapher/")
public class RootController {

    @GetMapping("/")
    public Map<String, String> index() {
        return Map.of(
                "status", "online",
                "message", "Welcome to the Grapher API v1",
                "documentation", "https://grapher.willyhsu0130.com",
                "version", "1.0.0");
    }
}