document.getElementById("OutputInfo").style = "display: flex";
document.getElementById("OutputResult").style = "display: none";
document.getElementById("heightUnit").value = "Centimeter";
document.getElementById("weightUnit").value = "Kg";

function BmiCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    var bmiHeight = document.getElementById("bmiHeight").value;
    var bmiWeight = document.getElementById("bmiWeight").value;
    if(IsInputFieldEmpty("bmiHeight"))
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Enter height.");
        return false;
    }
    else if(isNaN(bmiHeight))
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Enter valid height.");
        return false;
    }
    
    if(parseFloat(bmiHeight) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Enter valid height.");
        return false;
    }
    
    if(IsInputFieldEmpty("bmiWeight"))
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiWeight", "Enter weight.");
        return false;
    }   
    else if(isNaN(bmiWeight))
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiWeight", "Enter valid weight.");
        return false;
    }
    
    if((parseFloat(bmiWeight)) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiWeight", "Enter valid weight.");
        return false;
    }

    return true;
}

function BmiCalculatorReset()
{
    document.getElementById("bmiHeight").value = "";
    document.getElementById("bmiWeight").value = "";
    document.getElementById("bmiResult").innerHTML = "0.0";
    document.getElementById("heightUnit").value = "Centimeter";
    document.getElementById("weightUnit").value = "Kg";
    RemoveAllErrorMessage();
}

function BmiCalculation()
{
    if(BmiCalculatorFormValidate())
    {
        var count = 0;
        var result;
        var Height = Number(document.getElementById("bmiHeight").value)
        var Weight = Number(document.getElementById("bmiWeight").value)
        var heightUnit = document.getElementById("heightUnit").value;
        var weightUnit = document.getElementById("weightUnit").value;

        if(count == 0)
        {
            document.getElementById("OutputInfo").style = "display: none";
            document.getElementById("OutputResult").style = "display: flex";
            count++;
        }

        if(heightUnit == "Feet")
        {
            Height = (Height * 12) * 0.0254;
        }
        else if(heightUnit == "Inch")
        {
            Height = Height * 0.0254;
        }
        else if(heightUnit == "Centimeter")
        {
            Height = Height /100;
        }
        
        if(weightUnit == "Pound")
        {
            Weight = Weight / 2.20462;
        }

        result = (Weight / (Height * Height));

        document.getElementById("bmiResult").innerHTML = Number(result).toFixed(1);
    }
}