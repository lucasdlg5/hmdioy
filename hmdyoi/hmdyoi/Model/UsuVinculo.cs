using System;
using System.Collections.Generic;

namespace hmdyoi.Model
{
    public partial class UsuVinculo
    {
        public int VinId { get; set; }
        public int VinUsuOrigem { get; set; }
        public int VinUsuDestino { get; set; }
        public byte VinAceito { get; set; }
        public byte VinAlerta { get; set; }
    }
}
