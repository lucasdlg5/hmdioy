package fatec.com.hmdioy.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Historico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    public int hist_id ;
	
	@Column(name = "hist_usu_vin_id")
    public int hist_usu_vin_id ;
	
	@Column(name = "hist_valor_entrada")
    public int hist_valor_entrada ;
	
	@Column(name = "hist_usu_id_acao")
    public int hist_usu_id_acao ;
	
	@Column(name = "hist_valor_atual")
    public int hist_valor_atual ;
	
	@Column(name = "hist_valor_final")
    public int hist_valor_final ;
	
	@Column(name = "hist_descricao")
    public String hist_descricao ;
	
	@Column(name = "hist_data")
    public Date hist_data ;
	
	@Column(name = "hist_usu_devedor")
    public int hist_usu_devedor ;
	
	public Historico(int hist_usu_vin_id, int hist_valor_entrada, int hist_usu_id_acao, int hist_valor_atual, int hist_valor_final, String hist_descricao, Date hist_data, int hist_usu_devedor) {
		this.hist_usu_vin_id = hist_usu_vin_id;
		this.hist_valor_entrada = hist_valor_entrada;
		this.hist_usu_id_acao = hist_usu_id_acao;
		this.hist_valor_atual = hist_valor_atual;
		this.hist_valor_final = hist_valor_final;
		this.hist_descricao = hist_descricao;
		this.hist_data = hist_data;
		this.hist_usu_devedor = hist_usu_devedor;
	}
}
