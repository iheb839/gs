package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.EncadrantDto;
import com.example.gestionSoutenance.entity.Encadrant;
import java.util.stream.Collectors;

public class EncadrantMapper {

    public static EncadrantDto toDTO(Encadrant e) {
        if (e == null) return null;

        EncadrantDto dto = new EncadrantDto();
        dto.setId(e.getId());
        dto.setNom(e.getNom());
        dto.setPrenom(e.getPrenom());
        dto.setEmail(e.getEmail());
        dto.setGrade(e.getGrade());
        dto.setRole(e.getRole());

        if (e.getEtudiants() != null) {
            dto.setEtudiants(
                    e.getEtudiants()
                            .stream()
                            .map(et -> et.getId())
                            .collect(Collectors.toList())
            );
        }

        return dto;
    }

    public static Encadrant toEntity(EncadrantDto dto) {
        if (dto == null) return null;

        Encadrant e = new Encadrant();
        e.setId(dto.getId());
        e.setNom(dto.getNom());
        e.setPrenom(dto.getPrenom());
        e.setEmail(dto.getEmail());
        e.setGrade(dto.getGrade());
        e.setRole(dto.getRole());

        return e;
    }
}