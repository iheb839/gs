package com.example.gestionSoutenance.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
@Data
@Entity
@DiscriminatorValue("ADMIN")
public class Admin extends Utilisateur {
}
