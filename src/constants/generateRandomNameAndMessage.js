const names = [
  'Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 
  'Fiona', 'George', 'Hannah', 'Ivan', 'Julia', 
  'Karl', 'Luna', 'Mason', 'Nora', 'Oscar', 
  'Penny', 'Quinn', 'Roger', 'Sophie', 'Tom', 
  'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yasmin', 
  'Zach', 'Amelia', 'Brian', 'Cecilia', 'David', 
  'Eleanor', 'Felix', 'Grace', 'Henry', 'Isabel', 
  'Jack', 'Katie', 'Leonard', 'Monica', 'Nathan', 
  'Olivia', 'Peter', 'Queenie', 'Ryan', 'Sarah', 
  'Timothy', 'Uma', 'Vincent', 'Wilma', 'Xena', 
  'Yvonne', 'Zane'
];

const messages = [
  'Hello, how are you?', 'This is a great day!', 'I love coding!',
  'React is awesome!', 'Have a nice day!', 'What are you working on?',
  'That sounds exciting!', 'Could you help me with my project?',
  'I just learned something new!', 'That’s an interesting point!'
];

function generateRandomNameAndMessage() {
  const name = names[Math.floor(Math.random() * names.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];
  return { name, message };
}

export default generateRandomNameAndMessage;
