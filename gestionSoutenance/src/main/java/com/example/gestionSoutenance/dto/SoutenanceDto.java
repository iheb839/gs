package com.example.gestionSoutenance.dto;

import com.example.gestionSoutenance.entity.Etudiant;
import com.example.gestionSoutenance.entity.Salle;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
@Data
public class SoutenanceDto {
    private Long idSoutenance;
    private String type;
    private LocalDate date;
    private LocalTime heure;
    private String statut;
    private Etudiant etudiant;
    private Salle salle;
    private List<JuryDto> jurys;
}
