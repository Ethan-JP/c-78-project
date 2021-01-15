var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://image.freepik.com/free-vector/grandmother-holding-child-clothing-flat-cartoon-illustration-cheerful-grandma-senior-woman-ready-use-2d-character-template-commercial-animation-printing-design-isolated-comic-hero_151150-1655.jpg",
 "https://previews.123rf.com/images/jemastock/jemastock1806/jemastock180602274/102900663-cute-father-cartoon-vector-illustration-graphic-design.jpg", 
  "https://thumbs.dreamstime.com/z/young-mother-standing-her-three-children-happy-family-cartoon-vector-eps-illustration-isolated-white-young-mother-standing-109966271.jpg",
    "https://i.pinimg.com/originals/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg",
];
var names = ["Fmaily Book","Kamla Pates", "James Pates", "Darren Pates", "Santhosha Pates", ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("port").src = updatedImage;