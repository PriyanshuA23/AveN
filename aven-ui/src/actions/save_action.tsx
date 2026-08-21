var currId = 2;

const notes = [
  {
    id: 1,
    title: "fitness",
    content: "fitness is one of the key aspect for living good life",
  },
];

export const saveNotes = (title: string, content: string) => {
  notes.push({ id: currId, title, content });
  currId++;
  console.log(notes);
};
