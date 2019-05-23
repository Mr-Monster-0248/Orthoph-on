const $ = require("../res/jquery");

const wordDisplay = document.getElementById("word-display-span");
const wordEntry = $("#word-display span");

$("document").on("keypress", function (e) {
    console.log(e);
});

wordEntry.on("click", function (e) {
    console.log("click");
})

console.log($("#word-display-span").html());