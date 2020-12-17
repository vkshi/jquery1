$(function() {
    $(".button").click(function() {
        let colors = 
        	["#3b302f",
            "#4a2c2a",
            "#825c43",
            "#a68966",
            "#e6e0d4",
            "#d6c6b4",
            "#864c24",
            "#a9898d"]
        let i = Math.floor(Math.random() * colors.length);
        $("body").css("background-color", colors[i]);
    });
});