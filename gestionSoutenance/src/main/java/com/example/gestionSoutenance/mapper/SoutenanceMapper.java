package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.SoutenanceDto;
import com.example.gestionSoutenance.entity.Soutenance;

import java.util.stream.Collectors;

public class SoutenanceMapper {

    public static SoutenanceDto toDto(Soutenance soutenance) {
        if (soutenance == null) return null;

        SoutenanceDto dto = new SoutenanceDto();
        dto.setIdSoutenance(soutenance.getIdSoutenance());
        dto.setType(soutenance.getType());
        dto.setDate(soutenance.getDate());
        dto.setHeure(soutenance.getHeure());
        dto.setStatut(soutenance.getStatut());

        if (soutenance.getEtudiant() != null) {
            dto.setIdSoutenance(soutenance.getEtudiant().getId());
        }

        if (soutenance.getSalle() != null) {
            dto.setSalle(soutenance.getSalle());
        }

        if (soutenance.getJurys() != null) {
            dto.setJurys(
                    soutenance.getJurys()
                            .stream()
                            .map(JuryMapper::toDTO)
                            .collect(Collectors.toList())
            );
        }

        return dto;
    }
}