const currentDay = document.querySelector("#current-day");
const timeBlocks = document.querySelectorAll(".time-block");

// Display the current day
const today = new Date();
currentDay.textContent = today.toLocaleDateString();

// Color-code the time blocks
const businessHoursStart = 9;
const businessHoursEnd = 17;
for (const timeBlock of timeBlocks) {
    const time = parseInt(timeBlock.querySelector(".time").textContent.split(":")[0]);
    if (time < businessHoursStart || time > businessHoursEnd) {
        timeBlock.classList.add("past");
    } else if (time === businessHoursStart + today.getHours() - 1) {
        timeBlock.classList.add("present");
    } else {
        timeBlock.classList.add("future");
    }
}

// Save events in local storage
for (const timeBlock of timeBlocks) {
    const saveBtn = timeBlock.querySelector(".save-btn");
    const textarea = timeBlock.querySelector("textarea");
    saveBtn.addEventListener("click", () => {
        localStorage.setItem(timeBlock.querySelector(".time").textContent, textarea.value);
    });
    textarea.value = localStorage.getItem(timeBlock.querySelector(".time").textContent) || "";
}
