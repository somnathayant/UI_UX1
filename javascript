<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>Insert title here</title>
</head>
<body onload="loading()">
	<div class="container">
		<div class="panel panel-default">
			<div class="panel-heading">JavaScript Example</div>
			<div class="panel-body">
				<div class="panel panel-default">
					<div class="panel-heading">Log-In Page</div>
					<div class="panel-body">
					<form id="myForm" onsubmit="submission(event)" action="" method="post" >
							<div class="row">
								<div class="col-md-4">
									<label for="name">Name:</label> 
									<input type="text"
										id="name" >
								</div>
								<div class="col-md-4">
									<label for="pass">Mobile Number :</label> <input type="text"
										id="pass" onblur="fun1()">
								</div>
								<div class="col-md-4">
									<button type="submit" class="btn btn-default">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				
				<div class="panel panel-default">
					<div class="panel-heading">Enter Numbers</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-md-4">
								<label for="num1">Number 1:</label> <input type="text" id="num1">
							</div>
							<div class="col-md-4">
								<label for="num2">Number 2:</label> <input type="text" id="num2">
								<div id="err1">
								
								</div>
							</div>
							<div class="col-md-4">
								<button type="button" class="btn btn-default" onclick="sum()">Sum</button>
								<button type="button" class="btn btn-default" onclick="Modulus()">Modulus</button>
							    <button type="button" class="btn btn-default" onclick="dialouge()">Dialouge</button>
							    <button type="button" class="btn btn-default" onclick="cssHandle()">Handling CSS</button>
								<button type="button" class="btn btn-default" onclick="stringHandling()">Handling String</button>
						        <button type="button" class="btn btn-default" onclick="dateHandling()">Handling Date</button>
						        <button type="button" class="btn btn-default" onclick="navigationPollicy()">Navigation</button>
								<a href="#">navigate</a>
							</div>
						</div>
						<div id="result">
							<p id="res" onmouseover="hover()">this is para1</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
	     var mob_check=false;

         function fun1(){
        	var Mobile_number=document.getElementById("pass").value
        	if(Mobile_number!=''){


        		if(isNaN(Mobile_number)){
   				 alert("not a number")
   				 document.getElementById("pass").style.borderColor="red"
   				 mob_check=false;
   			}else{
   				 mob_check=true;
   				}

            	
			
        }else{
			mob_check=false;
			alert("ok");
       	    document.getElementById("pass").style.borderColor="red"
       	     alert("Mobile number is important")
       }
      } 

          
	    function submission(event){
		   
	    	var userName=document.getElementById("name").value;
	    	//alert("ok");
	    	 if(userName==''){
	    		alert("you are not allowed to submit");
	    		event.preventDefault();
	    		return false;
		    	}
      }
	    		    	 
 	    	
	    
		   function sum(){
			 
			var num1=document.getElementById("num1").value;//2
	    	var num2=document.getElementById("num2").value;//2
	    	
	       var re=parseInt(num1)+parseInt(num2);
	        //var re=num1%3;
	       
	     // var result=num1+num2;
	      alert(re);
			
	       //alert(re);
	        //document.getElementById("num2").value=re;
	        //document.getElementById("result").innerHTML=re;
	       // document.getElementById("result").value=re;
	    	
		 }   
		 
		 function Modulus(){
			var num2=document.getElementById("num2").value;
			var mod=parseInt(num2)%3;
			//example value 8%3=2
			 if(mod==2){
			document.getElementById("result").innerHTML=mod;
			}else{
				document.getElementById("result").innerHTML="Sorry!";

				}
 		
			 } 
		 
		 /* function dialouge(){

			// window.print();
			  //alert("Passive Alert box");
			   var ar = [12,22,33,15];
			 var arSt = ["St1", "St2", "St3"];
			 l=ar.length;
			 l1=arSt.length;
			 alert(l);
			 alert(l1);
			  

			  for( i=0;i<l;i++){
			 if((ar[i]==15)){
			 alert(ar[i])//
			 }
			 }  
	} */
		 function cssHandle(){
					alert("ok");
		//10 then only above two css will be changed
			 //15 then only font will applied
			 var response = prompt('What is your option name?');
         	   if(response==10){
				   document.getElementById("res").style.color = "blue";
				   document.getElementById("res").style.backgroundColor="red";
				   }
			   if(response==15){
				       document.getElementById("err1").innerHTML="It Is Not A Number";
				       document.getElementById("err1").style.color = "red";
				       document.getElementById("num2").style.borderColor="red"
					   document.getElementById("res").style.font="italic bold 20px arial,serif";
					   }
			 //document.getElementById("pass").style.borderColor="red"
			 //document.getElementById("res").style.color = "blue";
		     //document.getElementById("res").style.backgroundColor="red";
			 //document.getElementById("res").style.font="italic bold 20px arial,serif";
			 
			 }
	 
		 function stringHandling(){
				var str = "we are in javascript as we are in ui/ux";
				var sln = str.length;
				var idx=str.indexOf("are");
				//alert("length="+sln);
				//alert("first index Of are= "+idx);
				var lIdx=str.lastIndexOf("are");
				//alert("Last index of are= "+lIdx);
				var fIndx=str.search("are");
				//alert(fIndx);
				
			    var sliceStr=str.slice(3,11);
				alert("Slice of String is = "+sliceStr);
				 
				   var sliceStr=str.slice(-30);
				alert("Slice of String from reverse is = "+sliceStr);
	  
				 var subSt=str.substr(3,3);
				alert("substring of string  = "+subSt);
				 
				  var newStr=str.replace("javascript","java");
				 alert("replaced string "+newStr);
				 alert("replaced string "+str);
				alert(newStr.toUpperCase());
				alert(newStr.toLowerCase());
 
				var s1="hi ";
				var s2="i am";
				var conStr=s1.concat(s2);
				//alert("concatination = " +conStr);
				//alert(s2.charAt(3));
				
				}
			
			function dateHandling(){
				  var d = new Date();
				  alert(d);
				  alert(d.getDate());
				  alert(d.getMonth()+1);
		    	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		    	alert(d.getDay());
		    	 alert(days[d.getDay()]);
		    	 //alert(d.getFullYear());
		    	/* alert(d.getDay());
		    	 alert(days[d.getDay()]);
		    	 alert(d.getMonth()+1);
		    	alert(d.getFullYear()); */
			  }

			  
			function navigationPollicy(){
				alert("=====");
				var userName=document.getElementById("name").value;
			    localStorage.setItem("loggedUser",userName);
				   if(userName !='admin'){
					   window.location.href="bom.html";//welcome somnath
					   }else{
						   window.location.href="venkata.jsp";
						   }
						
			    	    
 
				}
			
	</script>

</body>
</html>
