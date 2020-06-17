var db=require('./db');

var seedItems=[
    {
        name:"Medical Assistance",
        price:1,
        description:'Medical guidence will be given every week!'
    },
    {
        name:"Financial Planning",
        price:1,
        description:'Financial support will be given through Bank!'
    },
    {
        name:"Events",
        price:1,
        description:'All kinds of events will be planned!'
    },
    {
        name:"Shopping Trips",
        price:1,
        description:'Special discount will be provided on shopping!'
    },
    {
        name:"Visiting relatives",
        price:1,
        description:'Visiting relatives !'
    }
]

seedItems.forEach((item)=>{
    var newItem=new db.Item(item);
    newItem.save((err,item)=>{
        if(err) console.log("Failed to load item");
        console.log("Item:" +  item.name + " is added to database")
    });
})

console.log("Done")