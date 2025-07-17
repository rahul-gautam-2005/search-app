let users=[{
    name:"rahul gautam",
    pic:"https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8fDA%3D",
    bio:"Final-year B.Tech student passionate about tech, learning, and preparing for a successful career in the IT industry."
},
{
    name: "ananya sharma",
    pic: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60",
    bio: "Aspiring software engineer with a love for clean code, problem-solving, and innovation in tech."
},
{
    name: "rohan mehta",
    pic: "https://images.unsplash.com/photo-1593757147298-e064ed1419e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8fDA%3D",
    bio: "Final-year CS student eager to explore cloud computing, backend development, and real-world challenges."
},
{
    name: "sneha verma",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
    bio: "Tech enthusiast and fast learner focused on front-end design, user experience, and creativity in development."
},
{
    name: "karan patel",
    pic: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fHww",
    bio: "Coding addict with a passion for solving real-world problems using full-stack web technologies."
},
{
    name: "pooja iyer",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    bio: "Driven B.Tech student with a strong interest in AI/ML, data analysis, and research-based learning."
},

];

function showUsers(arr){
    arr.forEach(function (user) {
        const card=document.createElement("div");
        card.classList.add("card");

        const img=document.createElement("img");
        img.src=user.pic;
        img.classList.add("bg-img");

        const blurredLayer=document.createElement("div");
        blurredLayer.style.backgroundImage=`url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content=document.createElement("div")
        content.classList.add("content");

        const heading=document.createElement("h3");
        heading.textContent=user.name;

        const para=document.createElement("p")
        para.textContent=user.bio;

        content.appendChild(heading)
        content.appendChild(para)

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}
showUsers(users)

let inp=document.querySelector(".inp");
inp.addEventListener("input",()=>{
    let newUser=users.filter((user)=>{
        return user.name.startsWith(inp.value.toLowerCase());
    });
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";

    if (newUser.length === 0) {
        const msg = document.createElement("h3");
        msg.textContent = "No user found";
        msg.style.textAlign = "center";
        msg.style.color = "gray";
        cardsContainer.appendChild(msg);
    } else {
        showUsers(newUser);
    }
});

