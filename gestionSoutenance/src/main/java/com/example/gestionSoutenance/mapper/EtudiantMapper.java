package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.EtudiantDto;
import com.example.gestionSoutenance.entity.Etudiant;
import com.example.gestionSoutenance.entity.Encadrant;

public class EtudiantMapper {

    // ================= ENTITY -> DTO =================
    public static EtudiantDto toDTO(Etudiant etudiant) {
        if (etudiant == null) return null;

        EtudiantDto dto = new EtudiantDto();
        dto.setId(etudiant.getId());
        dto.setNom(etudiant.getNom());
        dto.setPrenom(etudiant.getPrenom());
        dto.setGenre(etudiant.getGenre());
        dto.setDateN(etudiant.getDateN());
        dto.setTel(etudiant.getTel());
        dto.setEmail(etudiant.getEmail());
        dto.setRole(etudiant.getRole());

        dto.setMatricule(etudiant.getMatricule());
        dto.setSpecialite(etudiant.getSpecialite());
        dto.setSujetPFE(etudiant.getSujetPFE());
        dto.setStatutTechnique(etudiant.isStatutTechnique());

        if (etudiant.getEncadrant() != null) {
            dto.setEncadrant(etudiant.getEncadrant());
        }

        return dto;
    }

    // ================= DTO -> ENTITY =================
    public static Etudiant toEntity(EtudiantDto dto, Encadrant encadrant) {
        if (dto == null) return null;

        Etudiant etudiant = new Etudiant();
        etudiant.setId(dto.getId());
        etudiant.setNom(dto.getNom());
        etudiant.setPrenom(dto.getPrenom());
        etudiant.setGenre(dto.getGenre());
        etudiant.setDateN(dto.getDateN());
        etudiant.setTel(dto.getTel());
        etudiant.setEmail(dto.getEmail());
        etudiant.setRole(dto.getRole());

        etudiant.setMatricule(dto.getMatricule());
        etudiant.setSpecialite(dto.getSpecialite());
        etudiant.setSujetPFE(dto.getSujetPFE());
        etudiant.setStatutTechnique(dto.isStatutTechnique());

        etudiant.setEncadrant(encadrant);

        return etudiant;
    }
}