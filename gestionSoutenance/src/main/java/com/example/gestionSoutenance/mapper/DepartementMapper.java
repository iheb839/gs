package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.DepartementDto;
import com.example.gestionSoutenance.entity.Departement;

import java.util.stream.Collectors;

public class DepartementMapper {

    public static DepartementDto toDTO(Departement d) {
        if (d == null) return null;
        DepartementDto dto = new DepartementDto();
        dto.setIdDepartement(d.getIdDepartement());
        dto.setNomDepartement(d.getNomDepartement());

        if (d.getEncadrants() != null && !d.getEncadrants().isEmpty()) {
            dto.setEncadrantIds(
                    d.getEncadrants()
                            .stream()
                            .map(encadrant -> encadrant.getId())
                            .collect(Collectors.toList())
            );
        }
        return dto;
    }
}