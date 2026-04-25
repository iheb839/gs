package com.example.gestionSoutenance.dto;

import com.example.gestionSoutenance.entity.Encadrant;
import lombok.Data;

@Data
public class EtudiantDto extends UtilisateurDto{
    private String matricule;
    private String specialite;
    private String sujetPFE;
    private boolean statutTechnique;
    private Encadrant encadrant;
}
