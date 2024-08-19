using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace RQ.Function.Models
{

    public class MultiResponse
    {
        [CosmosDBOutput("cloudResume", "Views", Connection = "CosmosDbConnectionSetting", CreateIfNotExists = true)]
        public Counter CounterResponse { get; set; }
        public HttpResponseData HttpResponse { get; set; }
    }
}