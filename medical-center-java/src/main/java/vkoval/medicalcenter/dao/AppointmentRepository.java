package vkoval.medicalcenter.dao;

import org.springframework.data.repository.CrudRepository;
import vkoval.medicalcenter.entity.schedule.Appointment;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Collection;
import java.util.List;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
    default List<Appointment> findAllByDayAndMedicalServiceId(LocalDate date, Long serviceId) {
        Instant startOfDay = date.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant endOfDay = date.atStartOfDay(ZoneId.systemDefault()).plusDays(1).toInstant();
        return findAllByTimeBetweenAndMedicalServiceId(startOfDay, endOfDay, serviceId);
    }

    default List<Appointment> findByDayAndMedicalServiceIdAAndReserverIsNull(LocalDate date, Long serviceId) {
        Instant startOfDay = date.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant endOfDay = date.atStartOfDay(ZoneId.systemDefault()).plusDays(1).toInstant();
        return findAllByTimeBetweenAndMedicalServiceIdAndReserverIsNull(startOfDay, endOfDay, serviceId);
    }

    List<Appointment> findAllByTimeBetweenAndMedicalServiceId(Instant startOfDay, Instant endOfDay, Long serviceId);

    List<Appointment> findAllByTimeBetweenAndMedicalServiceIdAndReserverIsNull(Instant startOfDay, Instant endOfDay, Long serviceId);

    Collection<Appointment> findAllByMedicalServiceId(Long serviceId);

    Collection<Appointment> findAll();

    void deleteAllByMedicalServiceId(Long serviceId);

    Collection<Appointment> findAllByReserverId(Long reserverId);
}
