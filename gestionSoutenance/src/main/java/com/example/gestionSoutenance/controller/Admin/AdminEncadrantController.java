package com.example.gestionSoutenance.controller.Admin;


import com.example.gestionSoutenance.dto.EncadrantDto;
import com.example.gestionSoutenance.service.Admin.EncadrantService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/encadrants")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminEncadrantController {

    private final EncadrantService encadrantService;

    @GetMapping
    public List<EncadrantDto> getAll() {
        return encadrantService.getAllEncadrants();
    }

    @PostMapping
    public EncadrantDto create(@RequestBody EncadrantDto dto) {
        return encadrantService.createEncadrant(dto);
    }

    @PutMapping("/{id}")
    public EncadrantDto update(@PathVariable Long id, @RequestBody EncadrantDto dto) {
        return encadrantService.updateEncadrant(id, dto);
    }
    @GetMapping("/find/{id}")
    public EncadrantDto getById(@PathVariable Long id) {
        return encadrantService.getEncadrantById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        encadrantService.deleteEncadrant(id);
    }

}