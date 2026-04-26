package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.JuryDto;
import com.example.gestionSoutenance.entity.Jury;

public class JuryMapper {

    public static JuryDto toDTO(Jury j) {
        if (j == null) return null;
        JuryDto dto = new JuryDto();
        dto.setIdJury(j.getIdJury());
        dto.setNom(j.getNom());
        dto.setGrade(j.getGrade());
        dto.setSpecialite(j.getSpecialite());
        return dto;
    }
}