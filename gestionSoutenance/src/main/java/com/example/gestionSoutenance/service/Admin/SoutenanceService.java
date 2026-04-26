package com.example.gestionSoutenance.service.Admin;



import com.example.gestionSoutenance.dto.SoutenanceDto;
import com.example.gestionSoutenance.mapper.SoutenanceMapper;
import com.example.gestionSoutenance.repository.SoutenanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class SoutenanceService {

    private final SoutenanceRepository soutenanceRepository;

    // ✅ toutes les soutenances
    public List<SoutenanceDto> getAllSoutenances() {
        return soutenanceRepository.findAll()
                .stream()
                .map(SoutenanceMapper::toDto)
                .collect(Collectors.toList());
    }

    // ✅ filtrer par type (TECHNIQUE / FINALE)
    public List<SoutenanceDto> getByType(String type) {
        return soutenanceRepository.findByType(type)
                .stream()
                .map(SoutenanceMapper::toDto)
                .collect(Collectors.toList());
    }

    // ✅ filtrer par date
    public List<SoutenanceDto> getByDate(LocalDate date) {
        return soutenanceRepository.findByDate(date)
                .stream()
                .map(SoutenanceMapper::toDto)
                .collect(Collectors.toList());
    }
}