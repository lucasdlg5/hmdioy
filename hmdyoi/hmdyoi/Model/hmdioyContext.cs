//Adicionar via NuGet:
// - Microsoft.EntityFrameworkCore.SqlServer
// - Microsoft.EntityFrameworkCore.Tools
// - Microsoft.EntityFrameworkCore.Tools.DotNet
// - MySql.Data.EntityFrameworkCore

// No terminal dentro da pasta do projeto, digite: "dotnet ef" (Sem aspas) para verificar se o EntityFramework foi instalado


// Clicar com botao direito em sima da solucao -> Edit (projeto).csproj
// Adicionar esta linha logo no primeiro bloco de <ItemGroup>:
// <DotNetCliToolReference Include="Microsoft.EntityFrameworkCore.Tools.DotNet" Version="2.0.0" />

//Crie a estrutura do banco de dados para realizar o DataBaseFirst

//Vá em: Tools -> NuGet Package Manger -> Package Manger Console
//Insira no console (para o MySQL foi pego aqui: https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework-core-scaffold-example.html)
//Scaffold-DbContext "server=SEUSERVIDOR;port=3306;user=SEUUSUARIO;password=SUASENHA;database=NOMEBANCODEDADOS" MySql.Data.EntityFrameworkCore -OutputDir NOMEDAPASTAQUEIRACRIARASCLASSES -f

using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace hmdyoi.Model
{
    public partial class hmdioyContext : DbContext
    {
        public hmdioyContext()
        {
        }

        public hmdioyContext(DbContextOptions<hmdioyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<HistoricoCobranca> HistoricoCobranca { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<UsuVinculo> UsuVinculo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=;database=hmdioy");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HistoricoCobranca>(entity =>
            {
                entity.HasKey(e => e.HistId);

                entity.ToTable("historico_cobranca", "hmdioy");

                entity.HasIndex(e => e.HistUsuIdAcao)
                    .HasName("HIST_USU_ID_ACAO");

                entity.HasIndex(e => e.HistUsuIdDevedor)
                    .HasName("HIST_USU_ID_DEVEDOR");

                entity.HasIndex(e => e.HistUsuVinId)
                    .HasName("HIST_USU_VIN_ID");

                entity.Property(e => e.HistId)
                    .HasColumnName("HIST_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.HistData)
                    .HasColumnName("HIST_DATA")
                    .HasColumnType("date");

                entity.Property(e => e.HistDescricao)
                    .IsRequired()
                    .HasColumnName("HIST_DESCRICAO")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.HistUsuIdAcao)
                    .HasColumnName("HIST_USU_ID_ACAO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.HistUsuIdDevedor)
                    .HasColumnName("HIST_USU_ID_DEVEDOR")
                    .HasColumnType("int(11)");

                entity.Property(e => e.HistUsuVinId)
                    .HasColumnName("HIST_USU_VIN_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.HistValorAtual)
                    .HasColumnName("HIST_VALOR_ATUAL")
                    .HasColumnType("int(9)");

                entity.Property(e => e.HistValorEntrada)
                    .HasColumnName("HIST_VALOR_ENTRADA")
                    .HasColumnType("int(9)");

                entity.Property(e => e.HistValorFinal)
                    .HasColumnName("HIST_VALOR_FINAL")
                    .HasColumnType("int(9)");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.UsuId);

                entity.ToTable("usuario", "hmdioy");

                entity.HasIndex(e => e.UsuEmail)
                    .HasName("USU_EMAIL")
                    .IsUnique();

                entity.HasIndex(e => e.UsuUsername)
                    .HasName("USU_USERNAME")
                    .IsUnique();

                entity.Property(e => e.UsuId)
                    .HasColumnName("USU_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.UsuEmail)
                    .IsRequired()
                    .HasColumnName("USU_EMAIL")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.UsuFoto)
                    .HasColumnName("USU_FOTO")
                    .HasColumnType("longblob");

                entity.Property(e => e.UsuNome)
                    .IsRequired()
                    .HasColumnName("USU_NOME")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.UsuUsername)
                    .IsRequired()
                    .HasColumnName("USU_USERNAME")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UsuWhatsapp)
                    .IsRequired()
                    .HasColumnName("USU_WHATSAPP")
                    .HasMaxLength(17)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UsuVinculo>(entity =>
            {
                entity.HasKey(e => e.VinId);

                entity.ToTable("usu_vinculo", "hmdioy");

                entity.HasIndex(e => e.VinUsuDestino)
                    .HasName("VIN_USU_DESTINO");

                entity.HasIndex(e => e.VinUsuOrigem)
                    .HasName("VIN_USU_ORIGEM");

                entity.Property(e => e.VinId)
                    .HasColumnName("VIN_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VinAceito)
                    .HasColumnName("VIN_ACEITO")
                    .HasColumnType("tinyint(1)");

                entity.Property(e => e.VinAlerta)
                    .HasColumnName("VIN_ALERTA")
                    .HasColumnType("tinyint(1)");

                entity.Property(e => e.VinUsuDestino)
                    .HasColumnName("VIN_USU_DESTINO")
                    .HasColumnType("int(11)");

                entity.Property(e => e.VinUsuOrigem)
                    .HasColumnName("VIN_USU_ORIGEM")
                    .HasColumnType("int(11)");
            });
        }
    }
}
