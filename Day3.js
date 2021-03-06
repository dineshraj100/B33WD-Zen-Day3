//q.no.1 - For the given JSON iterate over all for loops (for, for in, for of, forEach)
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function()
{
    var data= JSON.parse(request.response);
    console.log(data);

    // 1.For the given JSON iterate over all for loops (for,for in,for of,forEach)
    //method 1: For loop
    console.log("Method 1: For loop starts here:")
    for(i=0;i<data.length;i++)
    {
        console.log(data[i]);
    } 
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log("Method 2: For in starts here:");
    //method 2: For in loop
    for(var i in data)
    {
        console.log(data[i]);
    }
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log("method 3: for of loop is not applicable for objects,JSON and non primitive data types. it is only applicable for primitivie data types and Arrays.");
    //method 3: for of loop is not applicable for objects,JSON and non primitive data types. it is only applicable for primitivie data types and Arrays.
    //method 4: forEach loop
    console.log("Method 4: forEach loop starts here:")
    data.forEach(ele=> console.log(ele));

}

//q.no.2- Create your own resume data in JSON format

// var resume={
//     "Basics": {
//       "name": "Dineshraj.P",
//       "email": "dineshrajmech01@gmail.com",
//       "phone": "+916374913245",
//       "degree": "B.E-Mech",
//       "address": "No.12G,Rayan kuttai street",
//         "postalCode": "631502",
//         "city": "Kanchipuram",
//         "State": "TamilNadu"
//       },
      
    
    
//     "Education": 
//       {
//         "School": "Bharadhisan Matriculation Higher Secondary School",
//         "College": "Sri Venkateswara college of Engineering",
//         "gpa": "7.613",
//         "courses": "Mechanical Enginnering"
//       }
    
    
//   }
//   console.log(resume.Basics);
//   console.log(resume.Education);

