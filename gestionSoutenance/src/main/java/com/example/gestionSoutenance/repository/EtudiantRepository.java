package com.example.gestionSoutenance.repository;


import com.example.gestionSoutenance.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}

