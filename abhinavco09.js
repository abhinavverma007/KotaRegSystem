alert("Welcome");

function validateMb(){
	var val=document.getElementById("id_mb").value;
	var output=document.getElementById("id_output1");
	if(val.length===10){
		output.innerHTML="Accepted";
		output.style.color = "green";
	}
	else{
		output.innerHTML="Mobile Number must be of length 10.";
		output.style.color = "red";
	}
}
function validateEmail(){
	var val=document.getElementById("id_email").value;
	var output=document.getElementById("id_output2");
	var i;
	var ok=false;
	var ok1=false;
	var index;
	for(i=0; i<val.length; i++)
	{
		if(val[i]=='@')
		{
			ok=true;
			index=i;
			break;
		}
	}
	for(i=index+1; i<val.length; i++)
	{
		if(val[i]=='.' && i!=index+1 && i!=val.length-1)
		{
			ok1=true;
		}
	}

	if(ok==true && ok1==true){
		output.innerHTML="Accepted";
		output.style.color = "green";
	}
	else if(ok==false){
		output.innerHTML="Email Id Should Contain @";
		output.style.color = "red";
	}
	else if(ok1==false)
	{
		
		output.innerHTML="Invalid Email";
		output.style.color = "red";
	}
}

function Declaration(){
	var check=document.getElementById("declare");
	var message=document.getElementById("output_declare");
	if(check.checked==true){
		message.innerHTML="Accepted";
		message.style.color = 'green';
	}
	else{
		message.innerHTML="This check box must be checked";
		message.style.color = "red";
	}
}