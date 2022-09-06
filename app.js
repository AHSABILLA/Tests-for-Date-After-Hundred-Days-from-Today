const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const getaddxDays = (days) => {
    const newdays = addDays(new Date(), days);
    return `${newdays.getDay() + 11}/${
      newdays.getMonth() + 1
    }/${newdays.getFullYear()}`;
  };
  response.send(getaddxDays(100));
});

app.listen(3000);
module.exports = app;
