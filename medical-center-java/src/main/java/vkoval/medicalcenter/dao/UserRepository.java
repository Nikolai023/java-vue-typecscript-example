package vkoval.medicalcenter.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import vkoval.medicalcenter.entity.user.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByLogin(String login);

    boolean existsByLogin(String login);
}
