package com.example.gestionSoutenance.service.Admin;


import com.example.gestionSoutenance.dto.EncadrantDto;
import com.example.gestionSoutenance.entity.Encadrant;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.EncadrantMapper;
import com.example.gestionSoutenance.repository.EncadrantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EncadrantService {
    private final PasswordEncoder passwordEncoder;

    private final EncadrantRepository encadrantRepository;
    public List<EncadrantDto> getAllEncadrants() {
        return encadrantRepository.findAll()
                .stream()
                .map(EncadrantMapper::toDTO)
                .collect(Collectors.toList());
    }

    public EncadrantDto getEncadrantById(Long id) {
        Encadrant enc = encadrantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Encadrant non trouvé"));
        return EncadrantMapper.toDTO(enc);
    }
    public EncadrantDto createEncadrant(EncadrantDto dto) {
        Encadrant enc = EncadrantMapper.toEntity(dto);
        enc.setRole(Role.ENCADRANT);
        enc.setPassword(passwordEncoder.encode(dto.getPassword()));
        return EncadrantMapper.toDTO(encadrantRepository.save(enc));
    }

    public EncadrantDto updateEncadrant(Long id, EncadrantDto dto) {
        Encadrant enc = encadrantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Encadrant non trouvé"));

        enc.setNom(dto.getNom());
        enc.setPrenom(dto.getPrenom());
        enc.setEmail(dto.getEmail());
        enc.setGrade(dto.getGrade());
        enc.setDepartement(dto.getDepartement());

        return EncadrantMapper.toDTO(encadrantRepository.save(enc));
    }

    public void deleteEncadrant(Long id) {
        encadrantRepository.deleteById(id);
    }
}