package com.example.gestionSoutenance.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
public class Departement {
    @Id
    @GeneratedValue
    private Long idDepartement;
    private String nomDepartement;
    @OneToMany
    private List<Encadrant> encadrants;
}