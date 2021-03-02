$(document).ready(function()
{
    $("button").click(gradeB);


    function gradeB(event)
    {
        // stop form from submitting
        event.preventDefault();

        let pointE = parseFloat($("#pointEarned").val());
        let pointP = parseFloat($("#pointPossible").val());

        let student = {};
        student.fName = $("#firstName").val();
        student.lName = $("#lastName").val();
        student.percent = Math.round(pointE / pointP * 100);
        if (student.percent >=90){
            student.letterG = "A";
        }else if (student.percent >= 80){
            student.letterG = "B";
        }else if (student.percent >= 0){
            student.letterG = "C";
        }else
            student.letterG = "Undefined";


        let output = ` Book Grade : <br> <br> 
                First Name : ${student.fName} <br>
                Last Name : ${student.lName}<br> 
                Percentage : ${student.percent}%<br>
                Letter grade : ${student.letterG} <br>  `;

        $(" #message").html(output);


    }
});
