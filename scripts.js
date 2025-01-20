// Fetch user's data
async function fetchRandomUser() {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = '<p>Loading...</p>';
    try{
        const url = "https://randomuser.me/api/";
        let response = await fetch (url);
        let data = await response.json();
        let user = data.results[0];
        // Display user information
        userContainer.innerHTML = `
        <div class = "user-card">
            <div class="profile">
                <img src = "${user.picture.large}"" alt="user picture">
                <h2>${user.name.first} ${user.name.last}</h2>
            </div>
            <div class="details">
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
            </div>
        </div>
        `
    } catch(error){
        userContainer.innerHTML =  `<p>Error: ${error.message}</p>`;
    }
}
// Attach event listener to the button
document.getElementById("fetchUsers").addEventListener("click",()=>{
    fetchRandomUser();
});