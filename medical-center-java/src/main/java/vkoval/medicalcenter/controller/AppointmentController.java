package vkoval.medicalcenter.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import vkoval.medicalcenter.controller.models.AppointmentInfo;
import vkoval.medicalcenter.dao.AppointmentRepository;
import vkoval.medicalcenter.dao.MedicalServiceRepository;
import vkoval.medicalcenter.entity.schedule.Appointment;
import vkoval.medicalcenter.entity.service.MedicalService;
import vkoval.medicalcenter.entity.user.User;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
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


    @PostMapping("/appointments/add")
    public void addAppointment(
            @RequestParam(value = "service") Long serviceId,
            @RequestBody AppointmentInfo appointmentInfo
    ) {
        if (appointmentInfo.getTime() == null) {
            return;
        }
        Optional<MedicalService> medicalService = serviceRepository.findById(serviceId);
        if (medicalService.isEmpty()) {
            return;
        }

        Appointment appointment = new Appointment();
        appointment.setTime(appointmentInfo.getTime());
        appointment.setMedicalService(medicalService.get());

        appointmentRepository.save(appointment);
    }

    @PostMapping("/appointments/order/{id}")
    public void orderAppointment(Authentication authentication, @PathVariable Long id) {
        if (!authentication.isAuthenticated()) {
            return;
        }
        User currentUser = (User) authentication.getDetails();
        Optional<Appointment> appointment = appointmentRepository.findById(id);

        appointment.ifPresent(a -> {
            a.setReserver(currentUser);
            appointmentRepository.save(a);
        });

    }
}
