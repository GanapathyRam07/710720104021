const express = require("express");
const app = express();

app.use(express.json());

const oddNum = [];
const prime = []
const evenNum = [0];
const fibonum = [0, 1];

let i = 0;

app.get("/numbers/fibonum/:n", (req, res) => {
  const n = parseInt(req.params.n);

  //for fibo
  for (i = 2; i <= n; i++) {
    fibonum[i] = fibonum[i - 1] + fibonum[i - 2];
  }
  res.json(fibonum);
});

app.get("/numbers/prime/:n", (req, res) => {
    const n = parseInt(req.params.n);
    //prime
    for (i = 2; i < n; i++) {
      let flag = 0;
      for (j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
        }
      }
      if (flag === 0) {
        prime.push(i);
      }
    }
  
    res.send(prime);
  });
  
app.get("/numbers/evennum/:n", (req, res) => {
  const n = req.params.n;
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evenNum.push(i);
    }
  }
  res.send(evenNum);
});

app.get("/numbers/oddnum/:n", (req, res) => {
  const n = req.params.n;
  //odd
  for (i = 1; i < n; i++) {
    if (i % 2 != 0) {
      oddNum.push(i);
    }
  }
  res.send(oddNum);
});

app.listen(3000)