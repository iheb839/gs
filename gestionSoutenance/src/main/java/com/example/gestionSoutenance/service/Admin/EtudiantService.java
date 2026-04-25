package com.example.gestionSoutenance.service.Admin;

import com.example.gestionSoutenance.dto.EtudiantDto;
import com.example.gestionSoutenance.entity.Etudiant;
import com.example.gestionSoutenance.mapper.EtudiantMapper;
import com.example.gestionSoutenance.repository.EtudiantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EtudiantService{

    private final EtudiantRepository etudiantRepository;

    public List<EtudiantDto> getAllEtudiants() {
        return etudiantRepository.findAll()
                .stream()
                .map(EtudiantMapper::toDTO)
                .collect(Collectors.toList());
    }

    public EtudiantDto getEtudiantById(Long id) {
        Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
        return EtudiantMapper.toDTO(etudiant);
    }


    public EtudiantDto updateEtudiant(Long id, EtudiantDto dto) {
        Etudiant etudiant = etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant non trouvé"));
        etudiant.setNom(dto.getNom());
        etudiant.setPrenom(dto.getPrenom());
        etudiant.setEmail(dto.getEmail());
        etudiant.setGenre(dto.getGenre());
        etudiant.setTel(dto.getTel());
        etudiant.setDateN(dto.getDateN());
        etudiant.setDepartement(dto.getDepartement());
        etudiant.setMatricule(dto.getMatricule());
        etudiant.setSpecialite(dto.getSpecialite());
        etudiant.setSujetPFE(dto.getSujetPFE());
        return EtudiantMapper.toDTO(etudiantRepository.save(etudiant));
    }


    public void deleteEtudiant(Long id) {
        etudiantRepository.deleteById(id);
    }
}
