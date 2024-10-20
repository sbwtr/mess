let obj = {
  tola: { id: 0, mess: ["kolr", "hodden"] },
  kola: { id: 7, mess: ["diksjtra", "gromelk"] },
};

function addinput(value) {
  obj = { ...obj, [value]: { id: 5, mess: [] } };
}

addinput("dola");

function updateinput(value) {
  const pickobj = obj["dola"];
  console.log(pickobj.id);
  const nextobj = {
    ...pickobj,
    mess: [...pickobj.mess, value],
  };
  obj = { ...obj, ["dola"]: nextobj };
}

updateinput("dyrdymalki");
updateinput("stromiki");

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}:${value.mess}`);
}
