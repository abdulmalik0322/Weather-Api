const url = "https://randomuser.me/api/";
const GetUserBtn = document.getElementById("GetUserData");
const UserProfile = document.getElementById("UserProfileData");

GetUserBtn.addEventListener("click", async () => {
    try{
    const response = await fetch(url);
    const data = await response.json();

    if(data.status === "404"){
        UserProfile.innerHTML = "<p>Page Not found</p>";
        UserProfile.style.color = "black";
    }

    let profileImg = `${data.results[0].picture.medium}`;
    let fullname = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    let userEmail = `${data.results[0].email}`;
    let userAge = `${data.results[0].dob.age}`;
    let userGender = `${data.results[0].gender}`;
    let userLocation = `${data.results[0].location.country}`;

    UserProfile.classList.remove("active");
    void UserProfile.offsetWidth; // force reflow

    UserProfile.innerHTML = `
    <img src= "${profileImg}" alt = "user profile img">
    <br>
    <h3>Username: ${fullname}</h3>
    <p><b>Email</b>: ${userEmail}</p>
    <p><b>Age</b>: ${userAge}</p>
    <p><b>Gender</b>: ${userGender}</p>
    <p><b>Country</b>: ${userLocation}</p>
    `
    UserProfile.classList.add("active");
    }
    catch (error){
    UserProfile.innerHTML = "<h4>Something went Wrong</h4>";
    }
})
