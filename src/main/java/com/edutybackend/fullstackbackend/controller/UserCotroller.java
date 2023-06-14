package com.edutybackend.fullstackbackend.controller;

import com.edutybackend.fullstackbackend.model.User;
import com.edutybackend.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserCotroller {
    @Autowired
    private UserRepository userRepository;

            @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
            }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
