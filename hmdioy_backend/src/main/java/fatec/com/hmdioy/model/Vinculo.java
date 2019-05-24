package fatec.com.hmdioy.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Vinculo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int vin_id ;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="usu_id")
	public Usuario vin_usu_id_origem ;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="usu_id")
    public Usuario vin_usu_id_destino ;
	
	
	@Column(name = "vin_aceito")
    public Boolean vin_aceito ;
	
	@Column(name = "vin_alerta")
    public Boolean vin_alerta ;
	
	public Vinculo (Usuario vin_usu_id_destino,  int vin_id, Boolean vin_aceito, Boolean vin_alerta) {
		this.vin_usu_id_destino = vin_usu_id_destino;
		this.vin_id = vin_id;
		this.vin_aceito = vin_aceito;
		this.vin_alerta = vin_alerta;
	}

	public Usuario getVin_usu_id_origem() {
		return vin_usu_id_origem;
	}

	public void setVin_usu_id_origem(Usuario vin_usu_id_origem) {
		this.vin_usu_id_origem = vin_usu_id_origem;
	}

	public Usuario getVin_usu_id_destino() {
		return vin_usu_id_destino;
	}

	public void setVin_usu_id_destino(Usuario vin_usu_id_destino) {
		this.vin_usu_id_destino = vin_usu_id_destino;
	}

	public int getVin_id() {
		return vin_id;
	}

	public void setVin_id(int vin_id) {
		this.vin_id = vin_id;
	}

	public Boolean getVin_aceito() {
		return vin_aceito;
	}

	public void setVin_aceito(Boolean vin_aceito) {
		this.vin_aceito = vin_aceito;
	}

	public Boolean getVin_alerta() {
		return vin_alerta;
	}

	public void setVin_alerta(Boolean vin_alerta) {
		this.vin_alerta = vin_alerta;
	}
}
