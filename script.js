unction addTask() {
      const myInput = document.getElementById("input").value.trim(); //to get inputfield value
      if (myInput !== "") {
        const li = document.createElement("li"); // to create a list item
        li.textContent = myInput; // the content of the list item same as content in inputfield
        document.getElementById("listItem").appendChild(li); // append to the list its son
        document.getElementById("input").value = ""; // clear input
      };
    };

    // To add eventListener to the button to perform click
    document.getElementById("btn").addEventListener("click", addTask);  

