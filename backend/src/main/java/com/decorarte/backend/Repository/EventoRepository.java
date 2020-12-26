package com.decorarte.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.decorarte.backend.Entity.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long> {

}
