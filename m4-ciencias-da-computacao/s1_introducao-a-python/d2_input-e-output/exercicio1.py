name = input('Digite um nome\n')

print()  # Skip a line

for i in range(0, len(name)):
    print(name[:-i] if i else name)
