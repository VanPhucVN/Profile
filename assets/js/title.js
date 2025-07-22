var titles = [
  "@",
  "@V",
  "@Va",
  "@Van",
  "@Van ",
  "@Van P",
  "@Van Ph",
  "@Van Phu",
  "@Van Phuc",
  "@Van Phuc ",
  "@Van Phuc V",
  "@Van Phuc VN",
  "@Van Phuc V",
  "@Van Phuc ",
  "@Van Phuc",
  "@Van Phu",
  "@Van Ph",
  "@Van P",
  "@Van ",
  "@Van",
  "@Va",
  "@V",
  "@"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
