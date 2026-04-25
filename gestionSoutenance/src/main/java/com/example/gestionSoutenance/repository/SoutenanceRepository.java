package com.example.gestionSoutenance.repository;


import com.example.gestionSoutenance.entity.Soutenance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SoutenanceRepository extends JpaRepository<Soutenance, Long> {
}

