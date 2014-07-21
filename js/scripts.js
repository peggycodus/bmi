$(document).ready(function() {

    $("form#bmi-form").submit(function(event) {
        event.preventDefault();
        //get the values from the form
        var inputtedWeight = parseInt($("input#weight").val());
        var inputtedHeight = parseInt($("input#height").val());
        
        

        if ((!inputtedWeight) || (!inputtedHeight)) {
            alert("Please enter a non-zero number for height in inches and weight in pounds");
            return;
        };

        var bmiCalculatorEnglish = function(weight, height) {
            var bmi = 703 * weight / (height * height);
            bmi= +bmi.toFixed(2);
            return bmi;
        }

        bmi = bmiCalculatorEnglish(inputtedWeight, inputtedHeight);

        console.log(bmi);

        $(".weight").text(inputtedWeight);
        $(".height").text(inputtedHeight);
        $("#result h3").text("Your BMI is:" + " " +bmi);

        $("#result").show();

        $("input#weight").val("");
        $("input#height").val("");

        
    });
});
