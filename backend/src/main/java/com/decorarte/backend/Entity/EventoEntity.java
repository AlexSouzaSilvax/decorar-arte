package com.decorarte.backend.Entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EventoEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private int tipoServico; // 0 = Decoração, 1 = Pegue e Monte
	private String nomeCliente;
	private String telefoneCliente;
	private String nomeEvento;
	private Date dataEvento;
	private String observacaoEvento;
	private boolean pagoCobranca; // true = pago, false = não pago
	private double valorCobranca;
	private int tipoPgtoCobranca; // 0 = À Vista, 1 = À Prazo, 2 = Cartão de Crédito/Débito
	private double valorEntradaCobranca;
	private Date dtPrevQuitaCobranca;
	private String observacao_cobranca;

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

	public int getTipoPgtoCobranca() {
		return tipoPgtoCobranca;
	}

	public void setTipoPgtoCobranca(int tipoPgtoCobranca) {
		this.tipoPgtoCobranca = tipoPgtoCobranca;
	}

	public double getValorEntradaCobranca() {
		return valorEntradaCobranca;
	}

	public void setValorEntradaCobranca(double valorEntradaCobranca) {
		this.valorEntradaCobranca = valorEntradaCobranca;
	}

	public Date getDtPrevQuitaCobranca() {
		return dtPrevQuitaCobranca;
	}

	public void setDtPrevQuitaCobranca(Date dtPrevQuitaCobranca) {
		this.dtPrevQuitaCobranca = dtPrevQuitaCobranca;
	}

	public String getObservacao_cobranca() {
		return observacao_cobranca;
	}

	public void setObservacao_cobranca(String observacao_cobranca) {
		this.observacao_cobranca = observacao_cobranca;
	}

}
