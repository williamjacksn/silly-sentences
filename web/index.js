const first = [
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

const second = [
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

const third = [
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

const fourth = [
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

function refresh() {
    const firstSpan = document.getElementById('first');
    const firstIndex = Math.floor(Math.random() * first.length);
    firstSpan.textContent = first[firstIndex];

    const secondSpan = document.getElementById('second');
    const secondIndex = Math.floor(Math.random() * second.length);
    secondSpan.textContent = second[secondIndex];

    const thirdSpan = document.getElementById('third');
    const thirdIndex = Math.floor(Math.random() * third.length);
    thirdSpan.textContent = third[thirdIndex];

    const fourthSpan = document.getElementById('fourth');
    const fourthIndex = Math.floor(Math.random() * fourth.length);
    fourthSpan.textContent = fourth[fourthIndex];
}

refresh();
