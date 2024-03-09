function seedData() {
  if (localStorage.getItem("posts")) {
    return;
  }

  const posts = [
    {
      id: 0,
      title: "Materijali za pripremu prijemnog za medicinu??",
      content:
        "Pozdrav, da li neko ima materijale za pripremu prijemnog ispita za medicinu?",
      date: new Date().toISOString(),
      comments: [
        {
          author: "Pera",
          content: "Ja imam, javi se u inbox!",
          date: new Date().toISOString(),
        },
        {
          author: "Mika",
          content: "I ja bih bio zahvalan na tome!",
          date: new Date().toISOString(),
        },
      ],
    },
    {
      id: 1,
      title: "Sigurnosne i međunarodne studije - SUM",
      content: "Pozdrav, da li neko ima iskustva sa ovim fakultetom?",
      date: new Date().toISOString(),
      comments: [
        {
          author: "Janko",
          content: "Ja sam student na SUM-u, pitaj šta te zanima!",
          date: new Date().toISOString(),
        },
        {
          author: "Zika",
          content: "Kako je studirati tamo?",
          date: new Date().toISOString(),
        },
      ],
    },
  ];

  localStorage.setItem("posts", JSON.stringify(posts));
}

seedData();
