import sys
import os
sys.path.append('../../../compute/awsLambda')

from viewCounter import increment

def test_number():
    assert increment(3) == 4

def test_None():
    assert increment(None) == 1