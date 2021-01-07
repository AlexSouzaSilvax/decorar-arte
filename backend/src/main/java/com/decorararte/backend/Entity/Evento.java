package com.decorararte.backend.Entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Evento {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private int tipoServico; // 0 = Decoração, 1 = Pegue e Monte
	private String nomeCliente;
	private String telefoneCliente;
	private String nomeEvento;
	private String localEvento;
	private Date dataEvento;
	private String observacaoEvento;
	private boolean pagoCobranca; // true = pago, false = não pago
	private double valorCobranca;	
	private String observacaoCobranca;
	private String imagem;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(int tipoServico) {
		this.tipoServico = tipoServico;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public String getTelefoneCliente() {
		return telefoneCliente;
	}

	public void setTelefoneCliente(String telefoneCliente) {
		this.telefoneCliente = telefoneCliente;
	}

	public String getNomeEvento() {
		return nomeEvento;
	}

	public void setNomeEvento(String nomeEvento) {
		this.nomeEvento = nomeEvento;
	}

	public String getLocalEvento() {
		return localEvento;
	}

	public void setLocalEvento(String localEvento) {
		this.localEvento = localEvento;
	}

	public Date getDataEvento() {
		return dataEvento;
	}

	public void setDataEvento(Date dataEvento) {
		this.dataEvento = dataEvento;
	}

	public String getObservacaoEvento() {
		return observacaoEvento;
	}

	public void setObservacaoEvento(String observacaoEvento) {
		this.observacaoEvento = observacaoEvento;
	}

	public boolean isPagoCobranca() {
		return pagoCobranca;
	}

	public void setPagoCobranca(boolean pagoCobranca) {
		this.pagoCobranca = pagoCobranca;
	}

	public double getValorCobranca() {
		return valorCobranca;
	}

	public void setValorCobranca(double valorCobranca) {
		this.valorCobranca = valorCobranca;
	}

	public String getObservacaoCobranca() {
		return observacaoCobranca;
	}

	public void setObservacaoCobranca(String observacaoCobranca) {
		this.observacaoCobranca = observacaoCobranca;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

}

