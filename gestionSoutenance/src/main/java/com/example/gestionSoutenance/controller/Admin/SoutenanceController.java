package com.example.gestionSoutenance.controller.Admin;


import com.example.gestionSoutenance.dto.SoutenanceDto;
import com.example.gestionSoutenance.service.Admin.SoutenanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

    @RestController
    @RequestMapping("/api/admin/soutenances")
    @RequiredArgsConstructor
    @PreAuthorize("hasRole('ADMIN')")
    public class SoutenanceController {

        private final SoutenanceService soutenanceService;

        // ✅ toutes les soutenances
        @GetMapping
        public List<SoutenanceDto> getAll() {
            return soutenanceService.getAllSoutenances();
        }

        // ✅ filtrer par type
        @GetMapping("/type/{type}")
        public List<SoutenanceDto> getByType(@PathVariable String type) {
            return soutenanceService.getByType(type);
        }

        // ✅ filtrer par date
        @GetMapping("/date/{date}")
        public List<SoutenanceDto> getByDate(@PathVariable LocalDate date) {
            return soutenanceService.getByDate(date);
        }
    }
