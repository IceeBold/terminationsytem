// JavaScript function to redirect to the next page
function goToNextPage() {
    window.location.href = "3jkd2194LlpFhas.html"; // Replace with the actual URL or file path
}
function goToNextPage1() {
    window.location.href = "5hgm3827NnpQwez.html"; // Replace with the actual URL or file path
}
function goToNextPage2() {
    window.location.href = "6vtr9452ZjmYqax.html"; // Replace with the actual URL or file path
}
function goToNextPage3() {
    window.location.href = "puzzle4.html"; // Replace with the actual URL or file path
}
function goToNextPage4() {
    window.location.href = "puzzle5.html"; // Replace with the actual URL or file path
}

const terminalOutput = document.getElementById("output");
const commandLine = document.getElementById("command-line");

const fileSystem = {
  "logs/": ["error.log", "key_part_1.log", "key_part_2.log"],
  "files/": ["instructions.txt", "smiley.log.enc", "corrupted.data.enc"],
};
const decryptionKey = "SM1LEY42";
let decryptedFiles = {};

const commands = {
  help: `
Commands:
  ls [directory] - List files in a directory
  cat [filename] - View file contents
  decrypt [filename] [key] - Decrypt a file (if you have the key)
  terminate protocol - Terminate the system
  help - Show this help message
  clear - Clear the terminal
`,
  clear: () => {
    terminalOutput.innerHTML = "";
  },
};

const fileContents = {
  "instructions.txt": "Use 'decrypt' to unlock files. Find keys in logs/",
  "key_part_1.log": "DECRYPTION KEY: SM1L",
  "key_part_2.log": "DECRYPTION KEY (cont.): EY42",
  "smiley.log.enc": "[Encrypted file. Use decrypt to unlock.]",
  "corrupted.data.enc": "[Encrypted file. Use decrypt to unlock.]",
};

const decryptedFileContents = {
  "smiley.log.decrypted": "Override Code: TERMINATE-PROTOCOL",
};

function handleCommand(input) {
  const args = input.trim().split(" ");
  const command = args[0];

  if (input === "terminate protocol") {
    terminateProtocol();
  } else if (command === "ls") {
    const directory = args[1] || "/";
    const files = fileSystem[directory];
    if (files) {
      printOutput(files.join("\n"));
    } else {
      printOutput("Directory not found.");
    }
  } else if (command === "cat") {
    const file = args[1];
    if (fileContents[file]) {
      printOutput(fileContents[file]);
    } else if (decryptedFiles[file]) {
      printOutput(decryptedFiles[file]);
    } else {
      printOutput("File not found.");
    }
  } else if (command === "decrypt") {
    const file = args[1];
    const key = args[2];
    if (!fileContents[file]) {
      printOutput("File not found.");
    } else if (key === decryptionKey) {
      const decryptedFile = file.replace(".enc", ".decrypted");
      decryptedFiles[decryptedFile] = decryptedFileContents[decryptedFile];
      printOutput(`${decryptedFile} created.`);
    } else {
      printOutput("Invalid decryption key.");
    }
  } else if (commands[command]) {
    if (typeof commands[command] === "function") {
      commands[command]();
    } else {
      printOutput(commands[command]);
    }
  } else {
    printOutput(`Command not found: ${command}`);
  }
}

function terminateProtocol() {
  printOutput("TERMINATING SYSTEM...");
  setTimeout(() => {
    document.body.style.transition = "all 2s ease";
    document.body.style.backgroundColor = "#000";
    document.body.innerHTML = ""; // Clear all content
  }, 2000); // Delay for dramatic effect
}

function printOutput(text) {
  terminalOutput.innerHTML += `${text}\n`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

commandLine.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const input = commandLine.value;
    printOutput(`> ${input}`);
    handleCommand(input);
    commandLine.value = "";
  }
});
document.addEventListener("DOMContentLoaded", function() {
    const morseOutput = document.getElementById("morse-output");
    const deviceScreen = document.getElementById("device-screen");
    const morseInput = document.getElementById("morse-input");
    const sendButton = document.getElementById("send-code");

    const correctCode = "... --- ..."; // Correct Morse code (e.g., S.O.S)
    let userInput = "";

    // Handle the "Send" button click
    sendButton.addEventListener("click", function() {
        userInput = morseInput.value.trim(); // Get the user input and remove extra spaces

        if (userInput === correctCode) {
            // Success feedback
            deviceScreen.textContent = "Message sent. Access granted.";
            deviceScreen.style.color = "#0f0"; // Green color for success

            // Trigger visual feedback (example: a small "turning off" effect)
            document.body.style.backgroundColor = "#333"; // Darken the background to simulate the screen turning off
            setTimeout(function() {
                document.body.style.backgroundColor = "#000"; // Make it darker for a "shutdown" effect
                setTimeout(function() {
                    // You can add any transition, animation or change to the page here
                    window.location.href = "nextPage.html"; // Go to the next stage/page of the game (or anything you'd like)
                }, 1500); // Wait for 1.5 seconds for the "shutdown" effect
            }, 500); // Wait for 500ms before starting the screen fade
        } else {
            // Error feedback
            deviceScreen.textContent = "Invalid code. Try again.";
            deviceScreen.style.color = "#f00"; // Red color for failure
        }

        // Optionally reset the input field after sending
        morseInput.value = "";
        updateOutput(userInput);
    });

    // Update the output displayed on the screen
    function updateOutput(code) {
        morseOutput.textContent = `Code: ${code}`;
    }
});


