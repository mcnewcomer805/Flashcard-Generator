function BasicCard(front, back) {
    this.front = front;
    this.back = back;
  };

  function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
  };

  module.exports = BasicCard, ClozeCard;
  // module.exports = ClozeCard;