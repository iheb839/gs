package com.example.gestionSoutenance.controller;


import com.example.gestionSoutenance.dto.LoginRequest;
import com.example.gestionSoutenance.dto.LoginResponse;
import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.entity.Etudiant;
import com.example.gestionSoutenance.entity.Utilisateur;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.UtilisateurMapper;
import com.example.gestionSoutenance.repository.UtilisateurRepository;
import com.example.gestionSoutenance.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {
    private final AuthService authService;
    private final UtilisateurRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register-first-admin")
    public ResponseEntity<UtilisateurDto> registerFirstAdmin(@RequestBody Utilisateur user) {
        boolean hasAdmin = userRepository.existsByRole(Role.ADMIN);
        if (hasAdmin) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.ADMIN);
        Utilisateur saved = userRepository.save(user);

        UtilisateurDto  dto = UtilisateurMapper.toDTO(saved);
        return ResponseEntity.ok(dto);
    }
    /*
    @PostMapping("/register")
    public ResponseEntity<UserDto> addUser(@RequestBody CreateUserDto dto, @RequestParam Long adminId) {
        UserDto user = this.userService.addUser(dto, adminId);
        if (user == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(user);
    }*/

    @PostMapping("/signup")
    public ResponseEntity<Etudiant> registerUser(@RequestBody Etudiant user) {
        Etudiant savedUser = authService.register(user);
        return ResponseEntity.ok(savedUser);
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return this.authService.login(request);
    }

}

