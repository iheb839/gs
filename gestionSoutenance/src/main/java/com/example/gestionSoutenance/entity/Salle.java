package com.example.gestionSoutenance.entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Salle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSalle;

    private String nomSalle;
    private int capacite;
}