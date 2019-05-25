package fatec.com.hmdioy.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vinculo")
public class Vinculo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vin_id")
	public Long vin_id ;
	
	@Column(name="vin_usu_origem", nullable= false)
    public Long vin_usu_id_origem ;
	
	@Column(name="vin_usu_destino", nullable= false)
    public Long vin_usu_id_destino ;
	
	@Column(name = "vin_aceito", nullable= false)
    public Boolean vin_aceito ;
	
	@Column(name = "vin_alerta", nullable= false)
    public Boolean vin_alerta;

	public Long getVin_id() {
		return vin_id;
	}

	public void setVin_id(Long vin_id) {
		this.vin_id = vin_id;
	}

	public Long getVin_usu_id_origem() {
		return vin_usu_id_origem;
	}

	public void setVin_usu_id_origem(Long vin_usu_id_origem) {
		this.vin_usu_id_origem = vin_usu_id_origem;
	}

	public Long getVin_usu_id_destino() {
		return vin_usu_id_destino;
	}

	public void setVin_usu_id_destino(Long vin_usu_id_destino) {
		this.vin_usu_id_destino = vin_usu_id_destino;
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