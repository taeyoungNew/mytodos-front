function getDate() {
  const date = new Date();
  const getFullYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDate = date.getDate();
  let getHour = date.getHours();
  let getMinutes = date.getMinutes();

  if (parseInt(getHour) < 10) {
    getHour = "0" + getHour;
  }
  if (parseInt(getMinutes) < 10) {
    getMinutes = "0" + getMinutes;
  }
  const today =
    getFullYear +
    "-" +
    getMonth +
    "-" +
    getDate +
    " " +
    getHour +
    ":" +
    getMinutes;
  return today;
}

async function divTodos(payload) {
  console.log("divTodos");
  const exTodos = payload;
  let set = [];
  let setData = [];
  for (let i = 0; i < exTodos.length; i++) {
    await set.push(exTodos[i].updateTime.substring(0, 10));
  }
  setData = new Set(set);
  this.updateAt = [...setData];
  for (let idx = 0; idx < this.updateAt.length; idx++) {
    this.exTodos[idx] = new Array();
    await exTodos.map((x) => {
      if (
        x.updateTime.substring(0, 10) === this.updateAt[idx].substring(0, 10)
      ) {
        this.exTodos[idx].push(x);
      }
    });
  }
  return exTodos;
}

export { getDate, divTodos };
