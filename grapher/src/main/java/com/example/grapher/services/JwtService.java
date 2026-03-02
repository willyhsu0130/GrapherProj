package com.example.grapher.services;

import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.grapher.models.User;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    public String generateToken(User user) {
        Date expiration = new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24);
        String jwt = Jwts.builder()
                .issuer("grapher")
                .subject(user.getUsername())
                .audience().add("grapher").and()
                .expiration(expiration) 
                .issuedAt(new Date())
                .id(UUID.randomUUID().toString())
                .signWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes()))
                .compact();
        return jwt;
    }

    public String verifyToken(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes()))
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();

        } catch (JwtException | IllegalArgumentException e) {
            return null;
        }
    }
}
