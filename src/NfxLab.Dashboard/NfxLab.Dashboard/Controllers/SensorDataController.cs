﻿using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace NfxLab.Dashboard.Controllers
{
    public class SensorDataController : ApiController
    {
        public void Put(dynamic data)
        {
            HttpContext.Current.Application["Data"] = data;
            
            var context = GlobalHost.ConnectionManager.GetHubContext<DashboardHub>();
            context.Clients.All.updateData(data);
        }
    }
}
