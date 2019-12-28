package vkoval.medicalcenter.controller;

import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vkoval.medicalcenter.dao.UserRepository;
import vkoval.medicalcenter.entity.user.Role;
import vkoval.medicalcenter.entity.user.User;

@RestController
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/admins")
    public String postAdmin(@RequestBody User user) {
        if (user == null || StringUtils.isEmpty(user.getLogin())) {
            return "Пустой запрос";
        }
        if (StringUtils.isEmpty(user.getPassword())) {
            return "Пароль не может быть пустым";
        }
        user.setRole(Role.ADMIN);
        userRepository.save(user);
        return null;
    }
}
