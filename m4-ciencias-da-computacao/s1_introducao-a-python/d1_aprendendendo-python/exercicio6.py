def isTriangle(a, b, c):
    return a + b > c and c + a > b and c + b > a


def triangleType(a, b, c):
    if not isTriangle(a, b, c):
        return 'Não é triângulo'

    if (a == b == c):
        return 'Equilátero'
    elif (a == b or b == c or a == c):
        return 'Isósceles'
    else:
        return 'Escaleno'
