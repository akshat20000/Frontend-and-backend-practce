// let txt = document.getElementById("txt") as HTMLInputElement;
// const result = document.getElementById("result");
// let startTime: number | null = null;
// txt.addEventListener("input", () => {
//     if (!startTime) {
//         startTime = Date.now(); 
//     }
//     let value = txt.value;
//     let length = value.length;
//     let currentTime = Date.now();
//     let timeElapsed = (currentTime - startTime) / 1000; 
//     let minutes = timeElapsed / 60;
//     let wpm = 0;
//     if (minutes > 0) {
//         wpm = (length / 5) / minutes;
//     }
//     if (result) {
//         result.textContent = `WPM: ${wpm.toFixed(2)}`;
//     }
// });
