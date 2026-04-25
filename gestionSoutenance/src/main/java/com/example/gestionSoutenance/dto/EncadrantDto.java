package com.example.gestionSoutenance.dto;

import lombok.Data;

import java.util.List;
@Data
public class EncadrantDto extends UtilisateurDto{

    private String grade;
    private List<Long> etudiants;

}
