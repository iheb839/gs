package com.example.gestionSoutenance.repository;

import com.example.gestionSoutenance.entity.Utilisateur;
import com.example.gestionSoutenance.enums.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
    Optional<Utilisateur> findByEmail(String email);

    long countByRole(Role role);

    List<Utilisateur> findByRole(Role role);


    boolean existsByRole(Role role);
}
