using System;
using System.Collections.Generic;

namespace hmdyoi.Model
{
    public partial class HistoricoCobranca
    {
        public int HistId { get; set; }
        public int HistUsuVinId { get; set; }
        public int HistValorEntrada { get; set; }
        public int HistUsuIdAcao { get; set; }
        public int HistValorAtual { get; set; }
        public int HistValorFinal { get; set; }
        public string HistDescricao { get; set; }
        public int? HistUsuIdDevedor { get; set; }
        public DateTime HistData { get; set; }

        public void teste()
        {

            //https://www.entityframeworktutorial.net/efcore/entity-framework-core-console-application.aspx
            hmdioyContext tess;
            tess.HistoricoCobranca.Add();

        }
    }


}
