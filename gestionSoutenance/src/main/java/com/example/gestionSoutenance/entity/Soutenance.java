package com.example.gestionSoutenance.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
@Data
@Entity
public class Soutenance {

    @Id
    @GeneratedValue
    private Long idSoutenance;

    private String type;
    private LocalDate date;
    private LocalTime heure;
    private String statut;
    @ManyToOne
    private Etudiant etudiant;
    @ManyToOne
    private Salle salle;
    @ManyToMany
    private List<Jury> jurys;
}