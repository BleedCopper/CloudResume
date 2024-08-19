


using System.Text.Json.Serialization;

public class Counter {
    public Counter (){
        Id = "1";
        Count = 0;
    }
    public Counter (Counter count){
        Id = count.Id;
        Count = count.Count;
    }

    [JsonPropertyName("id")]
    public String Id {get; set;}

    [JsonPropertyName("count")]
    public int? Count {get; set;}
}