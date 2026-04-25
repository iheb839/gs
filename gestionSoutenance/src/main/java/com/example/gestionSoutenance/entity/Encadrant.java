package com.example.gestionSoutenance.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Encadrant extends Utilisateur {
    private String grade;


    @OneToMany(mappedBy = "encadrant")
    private List<Etudiant> etudiants;

}
