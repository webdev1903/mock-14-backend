const express = require("express");
const router = express.Router();
const words = require("../words.json").words;

// console.log(words)

router.get("", async (req, res) => {
  try {
    console.log(words);
    let min = 0;
    let max = words.length;
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    let randomWord = words[random];
    return res.status(200).send(randomWord);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
