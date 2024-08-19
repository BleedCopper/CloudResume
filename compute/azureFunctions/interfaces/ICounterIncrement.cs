using RQ.Function.Models;

namespace RQ.Function.Interfaces
{

    public interface ICounterIncrement
    {
        public void Increment(Counter counter);
    }
}