package fatec.com.hmdioy.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Historico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer hist_id ;
	
	@Column(name = "hist_usu_vin_id")
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="vin_id")
    public Integer hist_usu_vin_id ;
	
	@Column(name = "hist_valor_entrada")
    public Integer hist_valor_entrada ;
	
	@Column(name = "hist_usu_id_acao")
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="usu_id")
    public Integer hist_usu_id_acao ;
	
	@Column(name = "hist_valor_atual")
    public Integer hist_valor_atual ;
	
	@Column(name = "hist_valor_final")
    public Integer hist_valor_final ;
	
	@Column(name = "hist_descricao")
    public String hist_descricao ;
	
	@Column(name = "hist_data")
    public Date hist_data ;
	
	@Column(name = "hist_usu_devedor")
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="usu_id")
    public Integer hist_usu_devedor ;
	
	public Historico(Integer hist_usu_vin_id, Integer hist_valor_entrada, Integer hist_usu_id_acao, Integer hist_valor_atual, Integer hist_valor_final, String hist_descricao, Date hist_data, Integer hist_usu_devedor) {
		this.hist_usu_vin_id = hist_usu_vin_id;
		this.hist_valor_entrada = hist_valor_entrada;
		this.hist_usu_id_acao = hist_usu_id_acao;
		this.hist_valor_atual = hist_valor_atual;
		this.hist_valor_final = hist_valor_final;
		this.hist_descricao = hist_descricao;
		this.hist_data = hist_data;
		this.hist_usu_devedor = hist_usu_devedor;
	}
	
	
	
	public Integer getHist_id() {
		return hist_id;
	}

	public void setHist_id(Integer hist_id) {
		this.hist_id = hist_id;
	}

	public Integer getHist_usu_vin_id() {
		return hist_usu_vin_id;
	}

	public void setHist_usu_vin_id(Integer hist_usu_vin_id) {
		this.hist_usu_vin_id = hist_usu_vin_id;
	}

	public Integer getHist_valor_entrada() {
		return hist_valor_entrada;
	}

	public void setHist_valor_entrada(Integer hist_valor_entrada) {
		this.hist_valor_entrada = hist_valor_entrada;
	}

	public Integer getHist_usu_id_acao() {
		return hist_usu_id_acao;
	}

	public void setHist_usu_id_acao(Integer hist_usu_id_acao) {
		this.hist_usu_id_acao = hist_usu_id_acao;
	}

	public Integer getHist_valor_atual() {
		return hist_valor_atual;
	}

	public void setHist_valor_atual(Integer hist_valor_atual) {
		this.hist_valor_atual = hist_valor_atual;
	}

	public Integer getHist_valor_final() {
		return hist_valor_final;
	}

	public void setHist_valor_final(Integer hist_valor_final) {
		this.hist_valor_final = hist_valor_final;
	}

	public String getHist_descricao() {
		return hist_descricao;
	}

	public void setHist_descricao(String hist_descricao) {
		this.hist_descricao = hist_descricao;
	}

	public Date getHist_data() {
		return hist_data;
	}

	public void setHist_data(Date hist_data) {
		this.hist_data = hist_data;
	}

	public Integer getHist_usu_devedor() {
		return hist_usu_devedor;
	}

	public void setHist_usu_devedor(Integer hist_usu_devedor) {
		this.hist_usu_devedor = hist_usu_devedor;
	}

	
}
