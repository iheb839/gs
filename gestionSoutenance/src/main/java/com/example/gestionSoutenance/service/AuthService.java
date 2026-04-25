package com.example.gestionSoutenance.service;

import com.example.gestionSoutenance.config.JwtUtil;
import com.example.gestionSoutenance.dto.LoginRequest;
import com.example.gestionSoutenance.dto.LoginResponse;
import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.entity.Etudiant;
import com.example.gestionSoutenance.entity.Utilisateur;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.UtilisateurMapper;
import com.example.gestionSoutenance.repository.UtilisateurRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UtilisateurRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public Etudiant register(Etudiant user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.ETUDIANT);
        return userRepository.save(user);
    }
    public LoginResponse login(LoginRequest request) {
        Utilisateur user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        String token = jwtUtil.generateToken(user.getEmail());
        UtilisateurDto userDto = UtilisateurMapper.toDTO(user);
        return new LoginResponse(userDto, token);
    }

}

