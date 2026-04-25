package com.example.gestionSoutenance.service.Admin;


import com.example.gestionSoutenance.dto.*;

import com.example.gestionSoutenance.entity.Encadrant;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.DepartementMapper;
import com.example.gestionSoutenance.mapper.EncadrantMapper;
import com.example.gestionSoutenance.mapper.UtilisateurMapper;
import com.example.gestionSoutenance.repository.DepartementRepository;
import com.example.gestionSoutenance.repository.SoutenanceRepository;
import com.example.gestionSoutenance.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class Admindashbord {

    private final UtilisateurRepository utilisateurRepository;
    private final DepartementRepository departementRepository;
    private final SoutenanceRepository soutenanceRepository;

    // ================= Dashboard =================

    public Map<String, Long> getDashboardStats() {

        Map<String, Long> stats = new HashMap<>();
        stats.put("totalUsers", utilisateurRepository.count());
        stats.put("totalEtudiants", utilisateurRepository.countByRole(Role.ETUDIANT));
        stats.put("totalEnseignants", utilisateurRepository.countByRole(Role.ENCADRANT));
        stats.put("totalChefs", utilisateurRepository.countByRole(Role.CHEF));
        stats.put("totalSoutenances", soutenanceRepository.count());

        return stats;
    }
    public List<UtilisateurDto> getAllUsers() {
        return utilisateurRepository.findAll()
                .stream()
                .map(UtilisateurMapper::toDTO)
                .collect(Collectors.toList());
    }

    // ================= Étudiants =================

    public List<UtilisateurDto> getAllEtudiants() {
        return utilisateurRepository.findByRole(Role.ETUDIANT)
                .stream()
                .map(UtilisateurMapper::toDTO)
                .collect(Collectors.toList());
    }

    // ================= Encadrants =================

    public List<EncadrantDto> getAllEncadrants() {
        return utilisateurRepository.findByRole(Role.ENCADRANT)
                .stream()
                .map(u -> EncadrantMapper.toDTO((Encadrant) u))
                .collect(Collectors.toList());
    }

    // ================= Chefs =================

    public List<UtilisateurDto> getAllChefs() {
        return utilisateurRepository.findByRole(Role.CHEF)
                .stream()
                .map(UtilisateurMapper::toDTO)
                .collect(Collectors.toList());
    }

    // ================= Départements =================

    public List<DepartementDto> getAllDepartements() {
        return departementRepository.findAll()
                .stream()
                .map(DepartementMapper::toDTO)
                .collect(Collectors.toList());
    }
}