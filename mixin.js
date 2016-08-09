var userProfile = {
	name: "Dustin",
	address: "123 Main Street",
	city: "Charlotte",
	state: "NC",
	zipcode: "28210",
	avatar: "dusty123",
}


function updateProfile(profile) {

	function getProfileUpdate(update) {
		console.log("Would you like to change the account's name?");
		update.name = "Bob";
		console.log("Would you like to change the account's address?");
		update.address= "789 Broadway";
	}	

	var updates = getProfileUpdate(profile)

	Object.assign(profile, updates)
	console.log("Your information is now: " + userProfile.name + " living at " + userProfile.address)

}

updateProfile(userProfile);