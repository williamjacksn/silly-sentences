import random

first = [
    'The giant',
    'A spotted',
    'The brave',
    'The grumpy',
    'A green',
    'A happy',
    'The hairy',
    'The clever',
    'The funny',
    'The hungry',
    'The silly',
    'The famous',
    'The noisy',
    'The pretty',
    'A fat',
    'The muddy',
]

second = [
    'penguin',
    'dog',
    'police officer',
    'baby',
    'alien',
    'old lady',
    'spider',
    'girl',
    'teacher',
    'monster',
    'parents',
    'rock star',
    'children',
    'dancer',
    'lion',
    'boy',
]

third = [
    'slipped',
    'went surfing',
    'caught a robber',
    'threw 100 peas',
    'crash-landed',
    'did a flip',
    'made a web',
    'rode a unicorn',
    'told a joke',
    'ate a chair',
    'sung songs',
    'played the tambourine',
    'played hide-and-go-seek',
    'twirled in a tutu',
    'chased a baboon',
    'took a ten-hour shower',
]

fourth = [
    'on a banana.',
    'at the beach.',
    'in the street.',
    'out the window.',
    'on the moon.',
    'on the trampoline.',
    'in a shoe.',
    'on a rainbow.',
    'in the classroom.',
    'at midnight.',
    'on the bus.',
    'at a concert.',
    'in the library.',
    'on TV.',
    'up a tree.',
    'in the bathroom.',
]

while True:
    print(random.choice(first), random.choice(second), random.choice(third), random.choice(fourth))
    print()
    input()
