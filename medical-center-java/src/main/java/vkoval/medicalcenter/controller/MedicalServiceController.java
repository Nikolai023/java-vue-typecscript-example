package vkoval.medicalcenter.controller;

import org.springframework.web.bind.annotation.*;
import vkoval.medicalcenter.dao.AppointmentRepository;
import vkoval.medicalcenter.dao.MedicalServiceRepository;
import vkoval.medicalcenter.entity.service.MedicalService;

import javax.transaction.Transactional;

@RestController
@Transactional
public class MedicalServiceController {
    private MedicalServiceRepository serviceRepository;
    private AppointmentRepository appointmentRepository;

    public MedicalServiceController(MedicalServiceRepository serviceRepository, AppointmentRepository appointmentRepository) {
        this.serviceRepository = serviceRepository;
        this.appointmentRepository = appointmentRepository;
    }

    @GetMapping("/service/all")
    public Iterable<MedicalService> getAll() {
        return serviceRepository.findAll();
    }

    @GetMapping("/service/{id}")
    public MedicalService getById(@PathVariable Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    @PostMapping("/service")
    public void addService(@RequestBody MedicalService medicalService) {
        serviceRepository.save(medicalService);
    }

    @PutMapping("/service/{id}")
    public void updateService(@PathVariable Long id, @RequestBody MedicalService medicalService) {
        if (!serviceRepository.existsById(id)) {
            return;
        }
        serviceRepository.save(medicalService);
    }

    @DeleteMapping("/service/{id}")
    public void deleteById(@PathVariable Long id) {
        appointmentRepository.deleteAllByMedicalServiceId(id);
        serviceRepository.deleteById(id);
    }
}
