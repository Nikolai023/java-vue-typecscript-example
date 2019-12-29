package vkoval.medicalcenter.dao;

import org.springframework.data.repository.CrudRepository;
import vkoval.medicalcenter.entity.schedule.Appointment;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
    default List<Appointment> getAllByDayAndService(LocalDate date, Long serviceId) {
        Instant startOfDay = date.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant endOfDay = date.atStartOfDay(ZoneId.systemDefault()).plusDays(1).toInstant();
        return getAllByTimeBetweenAndMedicalServiceId(startOfDay, endOfDay, serviceId);
    }

    List<Appointment> getAllByTimeBetweenAndMedicalServiceId(Instant startOfDay, Instant endOfDay, Long serviceId);
}
