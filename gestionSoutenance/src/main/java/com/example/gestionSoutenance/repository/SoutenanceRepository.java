package com.example.gestionSoutenance.repository;


import com.example.gestionSoutenance.entity.Soutenance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SoutenanceRepository extends JpaRepository<Soutenance, Long> {

    List<Soutenance> findByType(String type);

    List<Soutenance> findByDate(LocalDate date);

}

