package com.example.gestionSoutenance.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "SECRET_KEY_SMART_ARCHIVE_2025_2026";
    private final long EXPIRATION = 86400000; // 1 jour

    // ✅ Générer token avec role
    public String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role) // ✅ important
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes()), SignatureAlgorithm.HS256)
                .compact();
    }

    // ✅ Extraire email
    public String extractEmail(String token) {
        return extractClaims(token).getSubject();
    }

    // ✅ Extraire role
    public String extractRole(String token) {
        return extractClaims(token).get("role", String.class);
    }

    // ✅ Méthode commune
    private Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // ✅ Vérifier expiration
    public boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }
}