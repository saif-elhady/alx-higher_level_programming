#!/usr/bin/python3
def add_integer(a, b=98):
    if not isinstance (a,int) and not isinstance(a,float):
        raise TypeError ("a must eb an integer")

    if not isinstance (b,int) and not isinstance(b,float):
        raise TypeError ("b must eb an integer")

    if isinstance(a,float):
        a =int (a)

    if isinstance(b,float):
        b =int (b)

    return (a + b)
