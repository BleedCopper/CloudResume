


using System.Text.Json.Serialization;

public class Counter {
    public Counter (){
        Id = "1";
        Count = 0;
    }
    public Counter (int count){
        Id = "1";
        Count = count;
    }

    [JsonPropertyName("id")]
    public String Id {get; set;}

    [JsonPropertyName("count")]
    public int Count {get; set;}
}