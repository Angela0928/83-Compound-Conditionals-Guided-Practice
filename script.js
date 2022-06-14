$("button").click(function() {
    let time = $(".time").val();
    let hungry = $(".hungry").val();
    if(time === "Morning" && hungry === "Yes"){
        $(".result").text("Eat breakfast");
    } else if(time === "Morning" && hungry === "No"){
        $(".result").text("Sleep in");
    } else if(time === "Afternoon" && hungry === "Yes"){
        $(".result").text("Eat lunch");
    } else if(time === "Afternoon"||time === "Evening" && hungry === "No"){
        $(".result").text("Hand out with friends");
    } else if(time === "Evening" && hungry === "Yes"){
        $(".result").text("Eat dinner");
    } else{
        alert("Try again");
        $(".result").text("ERROR");
    }
});