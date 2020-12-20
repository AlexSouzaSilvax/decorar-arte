package com.decorarte.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.NoSuchElementException;

import com.decorarte.backend.Entity.EventoEntity;
import com.decorarte.backend.Repository.EventoRepository;

@RestController
@RequestMapping("/decorarte/api/evento")
public class EventoController {

	@Autowired
	EventoRepository eventoRepository;

	@GetMapping
	@CrossOrigin
	@RequestMapping("/")
	public ResponseEntity<List<EventoEntity>> listarEventos() {
		List<EventoEntity> listaEventos = eventoRepository.findAll();
		return ResponseEntity.ok().header("mensagem", "Sucesso").header("result", "true").body(listaEventos);

	}

	@GetMapping
	@CrossOrigin
	@RequestMapping("/buscar")
	public ResponseEntity<EventoEntity> buscarEventoById(@RequestParam long id) {
		EventoEntity evento = null;
		String msg = "Sucesso";
		String result = "true";
		try {
			evento = eventoRepository.findById(id).get();
		} catch (NoSuchElementException valuePresent) {
			msg = "Não encontrado";
			result = "false";
		}
		return ResponseEntity.ok().header("mensagem", msg).header("result", result).body(evento);
	}

	@PostMapping
	@CrossOrigin
	@RequestMapping("/salvar")
	public ResponseEntity<EventoEntity> adicionarEvento(@RequestBody EventoEntity evento) {
		if (eventoRepository.existsById(evento.getId())) {
			eventoRepository.deleteById(evento.getId());
		}
		eventoRepository.save(evento);
		return ResponseEntity.ok().header("mensagem", "Salvo com sucesso").header("result", "true").body(evento);
	}

	@PostMapping
	@CrossOrigin
	@RequestMapping("/apagar")
	public ResponseEntity<String> apagarEventoById(@RequestHeader Long id) {
		String resp;
		String result;
		try {
			eventoRepository.deleteById(id);
			resp = "Apagado com sucesso!";
			result = "true";
		} catch (Exception erro) {
			System.out.println("--------------------------> ERROR " + erro);
			resp = "Erro ao apagar";
			result = "false";
		}
		return ResponseEntity.ok().header("mensagem", resp).header("result", result).body(resp);
	}

}
