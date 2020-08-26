const titles = [
  { title: `Ta-Da! Here's your new note.  Get to editing!` },
  { title: `You clicked the create note button, so...here's your new note.` },
  { title: `One small note for man, one giant notepad for mankind.` },
  { title: `Step one, create a note. Step two, edit the note.` },
];

const titleGenerator = () => {
  return titles[Math.floor(Math.random() * titles.length)].title;
};

export default titleGenerator;
