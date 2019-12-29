package vkoval.medicalcenter.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import vkoval.medicalcenter.dao.MedicalServiceRepository;
import vkoval.medicalcenter.entity.service.MedicalService;

@RestController
public class MedicalServiceController {
    private MedicalServiceRepository serviceRepository;

    public MedicalServiceController(MedicalServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping("/service/all")
    public Iterable<MedicalService> getAll() {
        return serviceRepository.findAll();
    }

    @GetMapping("/service/{id}")
    public MedicalService getById(@PathVariable Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/service/{id}")
    public void deleteById(@PathVariable Long id) {
        serviceRepository.deleteById(id);
    }
}
