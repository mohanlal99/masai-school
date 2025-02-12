const people = [
    {
      name: "Alice",
      address: { city: "New York", street: { name: "Broadway", number: 123 } },
    },
    {
      name: "Bob",
      address: {
        city: "Los Angeles",
        street: { name: "Sunset Boulevard", number: 456 },
      },
    },
  ];
  
  // people.map((user)=>console.log(user.name))
  // people is a !Array in js but imageine array so find array to [0].name , [0].address.city,
  let {name:fName ,address:{city:fcity,street:{name:fstreetName}}} = people [0]
  // console.log(fName,fcity,fstreetName)
  let {name ,address:{city,street:{name:streetName}}} = people[1]
                        
  console.log([`${fName} lives in ${fcity} on ${fstreetName}", "${name} lives in ${city} ${streetName} on Sunset Boulevard`])
  // console.log(name,city,streetName)