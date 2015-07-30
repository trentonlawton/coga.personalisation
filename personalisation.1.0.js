/* name: personalisation1.0.js
author: Ayelet Seeman
function: personaliseImportance
input: cogaProfile
output: hides elements according to @aria-importance and user settings in cogaProfile
*/

personaliseImportance(cogaProfile)
function personaliseImportance(cogaProfile)
{
	//declare variables
  var profile = cogaProfile;
    var i, arImp, j, isHidden;
/*	var oneHidden, twoHidden, threeHidden, fourHidden;
oneHidden = profile['@aria-importance'].one.settings['@aria-hidden'];
twoHidden = profile['@aria-importance'].two.settings['@aria-hidden'];
threeHidden = profile['@aria-importance'][3].settings['@aria-hidden'];
fourHidden = profile['@aria-importance'].four.settings['@aria-hidden'];*/

  //get all elements
    var x = document.querySelectorAll( 'body *' );
//hide elements according to @aria-importance and user settings in cogaProfile
for (i = 0; i < x.length; i++) {
       arImp =  x[i].getAttribute("@aria-importance")
	   
;

	   if (arImp!=undefined)
	   {
	   for (j=1; j<5; j++)
	   {
		   isHidden = profile['@aria-importance'][j].settings['@aria-hidden'];

		   if (arImp == j)
		   {
		   if (isHidden == "true")
		   {
			   x[i].setAttribute("aria-hidden", "true");
		   }
		   else {
			   x[i].setAttribute("aria-hidden", "false");
		   }
		   }
	   }}
	   
	 }

 /*   for (i = 0; i < x.length; i++) {
       arImp =  x[i].getAttribute("@aria-importance")
//hide elements elements according to @aria-importance and user settings in cogaProfile
	   if (arImp!=undefined)
	   if (arImp=="1")
	   {
		   if (oneHidden == "true")
		   {
			   x[i].setAttribute("aria-hidden", "true");
		   }
	   }
	    else	  if (arImp=="2")
	   {
		   if (twoHidden == "true")
		   {
			   x[i].setAttribute("aria-hidden", "true");
		   }
	   }
		   
		  else  if (arImp=="3")
	   {
		   if (threeHidden == "true")
		   {
			   x[i].setAttribute("aria-hidden", "true");
		   }
	   }
		   else  if (arImp=="4")
	   {
		   if (fourHidden =="true")
		   {
			   x[i].setAttribute("aria-hidden", "true");
		   }
	   }
	   
	}*/
	

}




function moreOptions(cogaProfile)
{

	var profile = cogaProfile;
	var imp = findImportance(profile);
    if (imp!=5)
	{
		profile['@aria-importance'][imp].settings['@aria-hidden']="false";
		personaliseImportance(profile);
	}
	if (imp==4)
	{
	document.getElementById("more_options").setAttribute("aria-hidden", "true");
	}
	
}

function lessOptions(cogaProfile)
{
	var profile = cogaProfile;
	var imp = findImportance(profile);
	if (imp!=2)
	{
		profile['@aria-importance'][imp-1].settings['@aria-hidden']="true";
		personaliseImportance(cogaProfile);
	}
	document.getElementById("more_options").setAttribute("aria-hidden", "false");
}

function findImportance(cogaProfile)
{
	var profile = cogaProfile;
	var j, isHidden;
	
	for (j=1; j<5; j++)
	   {
		   isHidden = profile['@aria-importance'][j].settings['@aria-hidden'];
		   if (isHidden == "true")
		   {
			 return j;  
		   }

		 
	   }
	  return 5;
	
	
}



