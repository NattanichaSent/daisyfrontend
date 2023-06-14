package com.edutybackend.fullstackbackend.repository;

import com.edutybackend.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User ,Long> {
}
