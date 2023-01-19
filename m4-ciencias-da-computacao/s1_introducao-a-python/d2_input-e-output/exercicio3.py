import random

words = []

with open('words.txt') as file:
    words = file.read().split('\n')


def scrambleWord(word: str):
    return "".join(random.sample(word, len(word)))


def getRandomWord():
    return random.choice(words)


WORD = getRandomWord()
guess = ''

print(f'Guess the word for {scrambleWord(WORD)}:')

while WORD != guess:
    guess = input()

print(f'Yay! the correct word was {guess}')
