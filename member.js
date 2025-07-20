function skillsMember(member) {
    // Function to handle member skills
    if (member.skills && Array.isArray(member.skills)) {
        member.skills.forEach(skill => {
            console.log(`Member skill: ${skill}`);
        });
    } else {
        console.log('No skills found for this member.');
    }
}