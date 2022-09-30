function calculate() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    //document.getElementById("result").innerHTML = "Result is :" + (parseInt(input1) + parseInt(input2));
    document.getElementById("firstNameDisplay").innerHTML = "First Name :" + input1;
    console.log("Result is :" + (parseInt(input1) + parseInt(input2)))
}