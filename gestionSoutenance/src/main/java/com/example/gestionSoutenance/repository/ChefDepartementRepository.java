package com.example.gestionSoutenance.repository;

import com.example.gestionSoutenance.entity.ChefD;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChefDepartementRepository extends JpaRepository<ChefD, Integer> {
    boolean existsByDepartement(String departement);
}
