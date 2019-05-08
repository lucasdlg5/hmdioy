using System;
using System.Collections.Generic;

namespace hmdyoi.Model
{
    public partial class Usuario
    {
        public int UsuId { get; set; }
        public string UsuNome { get; set; }
        public string UsuEmail { get; set; }
        public string UsuUsername { get; set; }
        public string UsuWhatsapp { get; set; }
        public byte[] UsuFoto { get; set; }
    }
}
