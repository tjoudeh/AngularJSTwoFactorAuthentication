using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TwoFactorAuthentication.API.Filters;

namespace TwoFactorAuthentication.API.Controllers
{
    [Authorize]
    [RoutePrefix("api/Transactions")]
    public class TransactionsController : ApiController
    {
        [Route("history")]
        public IHttpActionResult GetHistory()
        {
            return Ok(Transaction.CreateTransactions());
        }

        [Route("transfer")]
        [TwoFactorAuthorize]
        public IHttpActionResult PostTransfer(TransferModeyModel transferModeyModel)
        {
            return Ok();
        }
    }

    #region Helpers

    public class Transaction
    {
        public int ID { get; set; }
        public string CustomerName { get; set; }
        public string Amount { get; set; }
        public DateTime ActionDate { get; set; }


        public static List<Transaction> CreateTransactions()
        {
            List<Transaction> TransactionList = new List<Transaction> 
            {
                new Transaction {ID = 10248, CustomerName = "Taiseer Joudeh", Amount = "$1,545.00", ActionDate = DateTime.UtcNow.AddDays(-5) },
                new Transaction {ID = 10249, CustomerName = "Ahmad Hasan", Amount = "$2,200.00", ActionDate = DateTime.UtcNow.AddDays(-6)},
                new Transaction {ID = 10250,CustomerName = "Tamer Yaser", Amount = "$300.00", ActionDate = DateTime.UtcNow.AddDays(-7) },
                new Transaction {ID = 10251,CustomerName = "Lina Majed", Amount = "$3,100.00", ActionDate = DateTime.UtcNow.AddDays(-8)},
                new Transaction {ID = 10252,CustomerName = "Yasmeen Rami", Amount = "$1,100.00", ActionDate = DateTime.UtcNow.AddDays(-9)}
            };

            return TransactionList;
        }
    }

    public class TransferModeyModel
    {
        public string FromEmail { get; set; }
        public string ToEmail { get; set; }
        public double Amount { get; set; }
    }

    #endregion
}
