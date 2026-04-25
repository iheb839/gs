package com.example.gestionSoutenance.repository;

import com.example.gestionSoutenance.entity.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartementRepository extends JpaRepository<Departement, Long> {
}
