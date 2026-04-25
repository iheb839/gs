package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.SalleDto;
import com.example.gestionSoutenance.entity.Salle;

public class SalleMapper {

    public static SalleDto toDTO(Salle s) {
        if (s == null) return null;

        SalleDto dto = new SalleDto();
        dto.setIdSalle(s.getIdSalle());
        dto.setNomSalle(s.getNomSalle());
        dto.setCapacite(s.getCapacite());

        return dto;
    }
}