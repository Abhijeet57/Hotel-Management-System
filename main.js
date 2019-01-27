/*--- Search field function ---*/
function myFunction()
{
  var txtName = document.getElementById("locations");
  var name = txtName.value;
  var txtdate = document.getElementById("date");
  date1 = txtdate.value;
  date2 = new Date(txtdate.value);
  todaydate = new Date();
  console.log(name);
  /*--- Search field can't be empty ---*/
    if (name == "" || date1 == "")
      {
        alert("Location and Date field can not be empty");
      }
  /*--- Date field must contain futur date ---*/
    else if(date2.getTime() < todaydate.getTime())
      {
        alert("Enter Valid Date");
      }
  /*--- Page navigation as per Entered Location ---*/
    else if (name == 'Boston')
      {
        window.location.href = "Boston.html";
      }
    else if (name == 'Newyork')
      {
        window.location.href = "Newyork.html";
      }
}

/*--- Feedback form function ---*/
function myform()
{
  var fName = document.getElementById("fname");
  var f_name = fName.value;

  var lName = document.getElementById("lname");
  var l_name = lName.value;

  var email = document.getElementById("Email_Id");
  var Email = email.value;

  var sub = document.getElementById("subject");
  var Subject = sub.value;
/*--- First name field can't be empty ---*/
  if (isNotEmpty(fName))
    {
      return true;
    }
  else
    {
      return false;
    }

  function isNotEmpty(field)
    {
    var fieldData =  field.value;

    if (fieldData == "")
      {
        field.className = "FieldError"; //Classs to highlight error
        alert("First name is compulsary.");
        return false;
      }
    else
      {
        field.className = "FieldOk"; //Resets field back to default
        console.log(f_name);
        console.log(l_name);
        console.log(Email);
        console.log(Subject);
        alert("Thank you for your Feedback");
        return true;
      }
    }
}

/*--- Image response function ---*/
function book(){
  alert("Your room is booked!! You will get confirmation email shortly.");
}
