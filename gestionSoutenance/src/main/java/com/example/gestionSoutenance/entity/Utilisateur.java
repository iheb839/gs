package com.example.gestionSoutenance.entity;


import com.example.gestionSoutenance.enums.Genre;
import com.example.gestionSoutenance.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;


@Entity
@Data
public class Utilisateur {
    @Id
    @GeneratedValue
    private Long id;
    private String nom;
    private String prenom;
    private Genre genre;
    private String tel;
    private Date dateN;
    private String departement;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private String confirmCode;
    @OneToMany(mappedBy = "encadrant")
    private List<Etudiant> etudiants;
}