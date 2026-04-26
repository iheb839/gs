package com.example.gestionSoutenance.controller.Admin;


import com.example.gestionSoutenance.dto.EtudiantDto;
import com.example.gestionSoutenance.service.Admin.EtudiantService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/etudiants")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminEtudiantController {

    private final EtudiantService etudiantService;

    @GetMapping
    public List<EtudiantDto> getAll() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping("/find/{id}")
    public EtudiantDto getById(@PathVariable Long id) {
        return etudiantService.getEtudiantById(id);
    }

    @PutMapping("/update/{id}")
    public EtudiantDto update(@PathVariable Long id, @RequestBody EtudiantDto dto) {
        return etudiantService.updateEtudiant(id, dto);
    }

    @DeleteMapping("/delete/{id}")

    public void delete(@PathVariable Long id) {
        etudiantService.deleteEtudiant(id);
    }
}