package fatec.com.hmdioy.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "usu_usuario")
public class Usuario {	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long usu_id;
	
	@Column(name="usu_nome", length = 150, nullable= false)
	public String usu_nome;
	
	@Column(name="usu_email", length = 150, nullable= false, unique = true)
	public String usu_email;
	
	@Column(name="usu_username", length = 20, nullable= false, unique = true)
	public String usu_username;
	
	@Column(name="usu_whatsapp", length = 17, nullable= false)
	public String usu_whatsapp;
	
	@Column(name="usu_foto", columnDefinition="longblob")
	//@Lob(type = LobType.BLOB)
	public byte[] usu_foto;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "uvi_usuario_vinculo",
	joinColumns = {@JoinColumn(name = "usu_id")},
	inverseJoinColumns = {@JoinColumn(name = "vin_id" ) })
	
	private List<Vinculo> vinculo;
	
	//public List<Vinculo> vinculo = new ArrayList<Vinculo>();

	public Long getUsu_id() {
		return usu_id;
	}

	public void setUsu_id(Long usu_id) {
		this.usu_id = usu_id;
	}

	public String getUsu_nome() {
		return usu_nome;
	}

	public void setUsu_nome(String usu_nome) {
		this.usu_nome = usu_nome;
	}

	public String getUsu_email() {
		return usu_email;
	}

	public void setUsu_email(String usu_email) {
		this.usu_email = usu_email;
	}

	public String getUsu_username() {
		return usu_username;
	}

	public void setUsu_username(String usu_username) {
		this.usu_username = usu_username;
	}

	public String getUsu_whatsapp() {
		return usu_whatsapp;
	}

	public void setUsu_whatsapp(String usu_whatsapp) {
		this.usu_whatsapp = usu_whatsapp;
	}

	public byte[] getUsu_foto() {
		return usu_foto;
	}

	public void setUsu_foto(byte[] usu_foto) {
		this.usu_foto = usu_foto;
	}

}
