// Init Github
const github = new Github();
// Init UI
const ui = new UI();
// Search input
const searchUser = document.getElementById("searchUser");

// Add event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
