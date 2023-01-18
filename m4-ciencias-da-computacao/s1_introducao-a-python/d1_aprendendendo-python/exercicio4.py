def biggestName(list):
    biggest = list[0]
    for name in list:
        if (len(name) > len(biggest)):
            biggest = name
    return biggest
