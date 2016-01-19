$(document).ready(function() {

    // mouseover easter egg
    regularText = {
        ryan: "",
        alex: "",
        kyle: "",
        jesse: "",
        shuyang: "",
        zach: ""
    };
    $(".team-wrapper").hover(function() {
        // mouse on
        mouseoverText = {
            ryan: "the crazy one",
            alex: "the misfit",
            kyle: "the rebel",
            jesse: "the troublemaker",
            shuyang: "the round peg in the square hole",
            zach: "the one who sees things differently"
        };
        id = this.id;
        for (var key in mouseoverText) {
            if (mouseoverText.hasOwnProperty(key) && key == id) {
                subtitle = $(this).find("h3")
                regularText[key] = subtitle.text()
                subtitle.text(mouseoverText[key])
            }
        }

    }, function() {
        // mouse off
        id = this.id;
        for (var key in regularText) {
            if (mouseoverText.hasOwnProperty(key) && key == id) {
                subtitle = $(this).find("h3")
                subtitle.text(regularText[key])
            }
        }
    });
})