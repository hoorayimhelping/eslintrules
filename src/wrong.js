// fat arrow functions
const wrong = incorrect => incorrect === 'incorrect';
const right = (correct) => {
  return correct === 'correct';
};

// ff statements
if (wrong('incorrect')) nope = 'nope';
if (nope === 'nope') { console.log('still nope'); }
if (nope === 'nope')
{
  console.log('definitely nope');
}

if (right('correct')) {
  console.log('correct!');
}

// function flow
const wrongFunctionFlow = (someString) => {
  if (someString === 'alakhazam') {
    return 'open sesame';
  } else {
    return 'you cantget in';
  }
};

const rightFunctionFlow = (someString) => {
  if (someString === 'alakhazam') {
    return 'open sesame';
  }

  return 'you cantget in';
};
wrongFunctionFlow();
rightFunctionFlow('alakhazam');

function warningHere() {
  return 'favor expressions';
}

const noWarning = function() {
  return 'not bad, try an arrow function for compact syntax';
};

const noWarningBest = () => {
  return 'yay';
};
warningHere();
noWarning();
noWarningBest();

// odds and ends
let nope = undefined;
parseInt('10');
['nope', 'nope', 'nope', 'nope',];
const SHOULD_USE_I_USE_CONVICT = process.env.USE_CONVICT_INSTEAD;
