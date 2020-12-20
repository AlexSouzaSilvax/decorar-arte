package com.decorarte.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.decorarte.backend.Entity.EventoEntity;

public interface EventoRepository extends JpaRepository<EventoEntity, Long> {

}
