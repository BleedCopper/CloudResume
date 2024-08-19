using System.Diagnostics.Metrics;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using RQ.Function.Models;
using RQ.Function.Interfaces;

namespace RQ.Function
{
    public class UpdateViewCountTrigger
    {
        private readonly ILogger<UpdateViewCountTrigger> _logger;
        private readonly ICounterIncrement _incrementer;

        public UpdateViewCountTrigger(ILogger<UpdateViewCountTrigger> logger, ICounterIncrement incrementer)
        {
            _logger = logger;
            _incrementer = incrementer;

        }

        [Function("UpdateViewCountTrigger")]
        public async Task<MultiResponse> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData req,
            [CosmosDBInput("cloudResume", "Views", Connection = "CosmosDbConnectionSetting")] List<Counter> counters)
        {
            _logger.LogInformation("[UpdateViewCountTrigger] Function processed a request.");
            Counter counter = counters.Count() == 0 ? new Counter() : counters[0];
            _incrementer.Increment(counter);

            HttpResponseData response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            string jsonString = JsonSerializer.Serialize(counter);
            await response.WriteStringAsync(jsonString);

            MultiResponse resp = new MultiResponse()
            {
                CounterResponse = new Counter(counter),
                HttpResponse = response
            };
            return resp;
        }



    }
}
