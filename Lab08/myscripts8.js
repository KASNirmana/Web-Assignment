        // Get NIC number from prompt box
        let nicNumber = prompt("Enter your NIC number:");

        // Extract year of birth using substring method
        let yearOfBirth = "19" + nicNumber.substring(0, 2);
        alert("Year of Birth: " + yearOfBirth);