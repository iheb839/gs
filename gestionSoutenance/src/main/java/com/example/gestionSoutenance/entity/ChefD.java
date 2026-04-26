package com.example.gestionSoutenance.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("ChefD")
public class ChefD extends Utilisateur {

}
