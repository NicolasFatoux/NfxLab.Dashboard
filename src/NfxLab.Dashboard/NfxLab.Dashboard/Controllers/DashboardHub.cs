using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Dynamic;
using System.Threading.Tasks;

namespace NfxLab.Dashboard.Controllers
{
    public class DashboardHub : Hub
    {
        public override Task OnConnected()
        {
            //string name = Context.User.Identity.Name;

            dynamic data = new ExpandoObject();
            data.Temperature = 23.45;
            data.Humidity = 34.56;
            data.UpdateTime = DateTime.Now.ToLongTimeString();
            data.UpdateDate = DateTime.Now.ToLongDateString();

            //Clients.User(name).updateData(data);
            Clients.Caller.UpdateData(data);

            return base.OnConnected();
        }
    }
}