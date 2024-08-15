using System.Diagnostics.Metrics;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace RQ.Function
{
    public class UpdateViewCountTrigger
    {
        private readonly ILogger<UpdateViewCountTrigger> _logger;

        public UpdateViewCountTrigger(ILogger<UpdateViewCountTrigger> logger)
        {
            _logger = logger;
        }

        [Function("UpdateViewCountTrigger")]
        public async Task<MultiResponse>  Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequestData req,
            [CosmosDBInput("cloudResume", "Views", Connection = "CosmosDbConnectionSetting", Id = "1", PartitionKey = "1")] Counter counter)
        {
            _logger.LogInformation("[UpdateViewCountTrigger] Function processed a request.");

            counter.Count += 1;

            HttpResponseData response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            string jsonString = JsonSerializer.Serialize(counter);
            await response.WriteStringAsync(jsonString);

            MultiResponse resp = new MultiResponse(){
                CounterResponse = new Counter(counter.Count),
                HttpResponse = response
            };
            return resp;
        }



    }
}
