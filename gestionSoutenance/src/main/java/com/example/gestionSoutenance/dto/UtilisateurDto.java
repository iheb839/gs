package com.example.gestionSoutenance.dto;


import com.example.gestionSoutenance.enums.Genre;
import com.example.gestionSoutenance.enums.Role;
import lombok.Data;

import java.util.Date;

@Data
public class UtilisateurDto {
    private Long id;
    private String nom;
    private String prenom;
    private Genre genre;
    private String tel;
    private Date dateN;
    private String departement;
    private String email;
    private String password;
    private Role role;
}

