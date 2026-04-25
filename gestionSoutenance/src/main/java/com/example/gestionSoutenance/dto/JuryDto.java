package com.example.gestionSoutenance.dto;

import lombok.Data;

@Data
public class JuryDto {
    private Long idJury;
    private String nom;
    private String grade;
    private String specialite;
}
