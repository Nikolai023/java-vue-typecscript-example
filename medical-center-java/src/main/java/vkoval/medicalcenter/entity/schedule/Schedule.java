package vkoval.medicalcenter.entity.schedule;


import java.time.LocalDate;
import java.util.Calendar;

public class Schedule {
    @Override
    public String toString() {
        Calendar calendar = Calendar.getInstance();
        calendar.get(Calendar.DATE);
        LocalDate.now().getDayOfMonth();
        return super.toString();
    }
}
