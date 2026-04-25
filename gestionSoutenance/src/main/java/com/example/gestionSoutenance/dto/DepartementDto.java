package com.example.gestionSoutenance.dto;

import com.example.gestionSoutenance.entity.Encadrant;
import lombok.Data;

import java.util.List;
@Data
public class DepartementDto {

    private Long idDepartement;
    private String nomDepartement;
    private List<Long> encadrantIds;

}
