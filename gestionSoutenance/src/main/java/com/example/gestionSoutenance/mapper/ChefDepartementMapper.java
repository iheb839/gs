package com.example.gestionSoutenance.mapper;


import com.example.gestionSoutenance.dto.ChefDdto;
import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.entity.ChefD;
import com.example.gestionSoutenance.enums.Role;

public class ChefDepartementMapper {

    // ================= ENTITY -> DTO =================
    public static ChefDdto toDto(ChefD chef) {
        if (chef == null) return null;

        ChefDdto dto = new ChefDdto();
        dto.setId(chef.getId());
        dto.setNom(chef.getNom());
        dto.setPrenom(chef.getPrenom());
        dto.setGenre(chef.getGenre());
        dto.setDateN(chef.getDateN());
        dto.setTel(chef.getTel());
        dto.setEmail(chef.getEmail());
        dto.setDepartement(chef.getDepartement());
        dto.setRole(Role.AGENT);

        return dto;
    }

    // ================= DTO -> ENTITY =================
    public static ChefD toEntity(ChefDdto dto) {
        if (dto == null) return null;

        ChefD chef = new ChefD();
        chef.setId(dto.getId());
        chef.setNom(dto.getNom());
        chef.setPrenom(dto.getPrenom());
        chef.setGenre(dto.getGenre());
        chef.setDateN(dto.getDateN());
        chef.setTel(dto.getTel());
        chef.setEmail(dto.getEmail());
        chef.setDepartement(dto.getDepartement());
        chef.setRole(Role.AGENT);

        return chef;
    }
}