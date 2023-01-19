import random

WORDS = [
    'SKYRIM',
    'ZELDA',
    'UBISOFT',
    'MAXIS',
    'SPORE',
    'ROCKSTAR',
    'REDEMPTION',
    'METRO',
    'EXODUS'
]


def scrambleWord(word: str):
    return "".join(random.sample(word, len(word)))


def getRandomWord():
    return random.choice(WORDS)


WORD = getRandomWord()
guess = ''

print(f'Guess the word for {scrambleWord(WORD)}')

while WORD != guess:
    guess = input('Guess a word:\n')

print(f'Yay! the correct word was {guess}')
