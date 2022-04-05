const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        lastName: "Kumar",
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];


// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]
function getFullName(facebookProfiles){
console.log(firstName in facebookProfiles)
 
    for( let i=0; i<facebookProfiles.length; i++){
        
        console.log("i");
    }
}

for (let firstName in facebookProfiles)

{
    console.log(firstName)
}




// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
    //write your code here
}

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

/* {
function getNameOfDriverWithoutDL(facebookProfiles) {
    for(let i=0; i<facebookProfiles.length; i++){
        // for (j=0; i<facebookProfiles.; j++)
        let x = facebookProfiles.likes;
        let y = facebookProfiles.hasDrivingLicence;

        if (x ==  "driving" ){

            return  facebookProfiles.firstName
            }

        }
    }
    console.log(getNameOfDriverWithoutDL(hasdrivingLicense)) */
/* 
    function getNameOfDriverWithoutDL(facebookProfiles) {
        //write your code here
        let result= facebookProfiles.find((element)=>(element.hasDrivingLicense===false&&element.likes.indexOf('driving')!==-1))
        return result===undefined?"No such Person":(result.lastName===undefined?result.firstName:result.firstName+" "+result.lastName)
    }
    
    
    console.log(getNameOfDriverWithoutDL(facebookProfiles));

 */
// ==================================== 0 ==================================== //
/* 
function profileLookup(name, property) {
    
     for (let i = 0; i < facebookProfiles.length; i++) {
        let x = facebookProfiles[i].firstName   ;
        for (let j = 0; j < facebookProfiles.lengath; j++) {
            let y = facebookProfiles[j].property;

        }
        if(name===x){
            return facebookProfiles[j].pro
        }
        console.log(x);
        return [x];
    }

 */
/*     
    function profileLookup(name, property) {
        for(let i=0; i<facebookProfiles.length; i++){
            if(facebookProfiles[i].firstName === name){
                if(facebookProfiles[i].hasOwnProperty(property)){
                    return facebookProfiles[i][property]
                }else if(facebookProfiles[i].number.hasOwnProperty(property))
                    return facebookProfiles[i].number[property]
                else return "no such property"
            } 
        }return "person does not exist"
    }
    console.log(profileLookup("Suyash", "number"))


 */



//write your code here


// complete the above function such that when it is called with name and property, 
//then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket
