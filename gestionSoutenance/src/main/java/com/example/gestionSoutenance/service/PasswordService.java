package com.example.gestionSoutenance.service;

import com.example.gestionSoutenance.dto.ChangePasswordRequest;
import com.example.gestionSoutenance.dto.UpdatePasswordRequest;
import com.example.gestionSoutenance.entity.Utilisateur;
import com.example.gestionSoutenance.repository.UtilisateurRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class PasswordService {
    private final UtilisateurRepository userRepository;
    private final JavaMailSender mailSender;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public PasswordService(UtilisateurRepository userRepository, JavaMailSender mail, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mailSender = mail;
        this.passwordEncoder = passwordEncoder;
    }
    public void sendConfirmationCode(String email) {
        Optional<Utilisateur> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) throw new RuntimeException("user non trouvé");
        Utilisateur user = userOpt.get();
        String code = String.valueOf(new Random().nextInt(899999) + 100000);
        user.setConfirmCode(code);
        userRepository.save(user);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(user.getEmail());
        message.setSubject("Confirmation code");
        message.setText("code est: " + code);
        mailSender.send(message);
    }

    public boolean updatePassword(UpdatePasswordRequest request) {
        Optional<Utilisateur> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isEmpty()) throw new RuntimeException("User non trouvé");
        Utilisateur user = userOpt.get();
        if (user.getConfirmCode().equals(request.getConfirmCode())) {
            user.setPassword(passwordEncoder.encode(request.getNewPassword()));
            user.setConfirmCode(null);
            userRepository.save(user);
            return true;
        } else {
            throw new RuntimeException("Code de confirmation invalid ");
        }
    }
    public boolean changePassword(ChangePasswordRequest request) {
        Optional<Utilisateur> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User non trouvé");
        }
        Utilisateur user = userOpt.get();
        if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            throw new RuntimeException("Ancien mot de passe incorrect");
        }
        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Confirmation mot de passe incorrect");
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        return true;
    }
}
