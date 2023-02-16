_cmnHideElement("OutputResult");
document.getElementById("heightUnit").value = "Centimeter";
document.getElementById("weightUnit").value = "Kg";

function BmiCalculatorFormValidate()
{
    RemoveAllErrorMessage();

    var bmiHeight = document.getElementById("bmiHeight").value;
    var bmiWeight = document.getElementById("bmiWeight").value;

    if(IsInputFieldEmpty("bmiHeight") || (isNaN(bmiHeight) && bmiHeight <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Enter valid height.");
        return false;
    }
    
    if(IsInputFieldEmpty("bmiWeight") || (isNaN(bmiWeight) && bmiWeight <= 0))
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
    document.getElementById("heightUnit").value = "Centimeter";
    document.getElementById("weightUnit").value = "Kg";
   
    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function BmiCalculation()
{
    if(BmiCalculatorFormValidate())
    {
        var result;
        var Height = Number(document.getElementById("bmiHeight").value)
        var Weight = Number(document.getElementById("bmiWeight").value)
        var heightUnit = document.getElementById("heightUnit").value;
        var weightUnit = document.getElementById("weightUnit").value;

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

        document.getElementById("bmiResult").innerHTML = result.toFixed(1);

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}