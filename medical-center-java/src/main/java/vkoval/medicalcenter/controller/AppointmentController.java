package vkoval.medicalcenter.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vkoval.medicalcenter.controller.models.AppointmentInfo;
import vkoval.medicalcenter.dao.AppointmentRepository;
import vkoval.medicalcenter.dao.MedicalServiceRepository;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AppointmentController {
    private MedicalServiceRepository serviceRepository;
    private AppointmentRepository appointmentRepository;

    public AppointmentController(MedicalServiceRepository serviceRepository, AppointmentRepository appointmentRepository) {
        this.serviceRepository = serviceRepository;
        this.appointmentRepository = appointmentRepository;
    }

    @GetMapping("/appointments/all")
    public List<AppointmentInfo> getAppointmentsByDay() {
        return appointmentRepository.findAll().stream()
                .map(AppointmentInfo::fromAppointment)
                .collect(Collectors.toList());
    }

    @GetMapping("/appointments/getByService")
    public List<AppointmentInfo> getAppointmentsByDay(@RequestParam(value = "service_id") Long serviceId) {
        if (!serviceRepository.existsById(serviceId)) {
            return Collections.emptyList();
        }

        return appointmentRepository.findAllByMedicalServiceId(serviceId)
                .stream()
                .map(AppointmentInfo::fromAppointment)
                .collect(Collectors.toList());
    }

    @GetMapping("/appointments/getByDateAndService")
    public List<AppointmentInfo> getAppointmentsByDay(
            @RequestParam(value = "service_id") Long serviceId,
            @RequestParam(value = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        if (!serviceRepository.existsById(serviceId)) {
            return Collections.emptyList();
        }

        return appointmentRepository.findAllByDayAndMedicalServiceId(date, serviceId)
                .stream()
                .map(AppointmentInfo::fromAppointment)
                .collect(Collectors.toList());
    }
}
