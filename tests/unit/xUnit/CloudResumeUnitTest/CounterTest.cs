using System.Diagnostics.Metrics;
using RQ.Function.Interfaces;
using RQ.Function.Models;

namespace CloudResumeUnitTest;

public class CounterTest
{
    private ICounterIncrement countIncrement;
    public CounterTest()
    {
        this.countIncrement = new CounterIncrement();
    }

    [Fact]
    public void TestIncrement()
    {
        Counter count = new Counter() { Count = 4 };
        countIncrement.Increment(count);
        Assert.Equal(count.Count, 5);
    }
}