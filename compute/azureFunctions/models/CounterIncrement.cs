using RQ.Function.Interfaces;

namespace RQ.Function.Models
{

    public class CounterIncrement : ICounterIncrement
    {

        public void Increment(Counter counter)
        {
            ++counter.Count;
        }
    }
}