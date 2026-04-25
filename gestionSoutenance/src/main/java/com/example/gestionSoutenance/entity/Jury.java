package com.example.gestionSoutenance.entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Jury {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idJury;
    private String nom;
    private String grade;
    private String specialite;

}