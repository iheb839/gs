package com.example.gestionSoutenance.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Etudiant extends Utilisateur {
    private String matricule;
    private String specialite;
    private String sujetPFE;
    private boolean statutTechnique;
    @ManyToOne
    private Encadrant encadrant;
}
