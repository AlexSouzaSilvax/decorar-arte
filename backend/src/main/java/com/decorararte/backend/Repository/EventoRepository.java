package com.decorararte.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.decorararte.backend.Entity.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long> {

}
