import data from "./language_data.json";

const energyTable = document.getElementById("energy-table-body");
const timeTable = document.getElementById("time-table-body");
const memoryTable = document.getElementById("memory-table-body");
const performanceTable = document.getElementById("performance-table-body");

const performance = data.map((val) => ({ language: val.Language, points: 0 }));

data.sort((a, b) => a.Energy - b.Energy);
data.map((val, idx) => {
   const tableRow = document.createElement("tr");

   const tableDataIdx = document.createElement("td");
   tableDataIdx.innerText = `${idx + 1}`;
   tableRow.appendChild(tableDataIdx);

   const tableDataLanguage = document.createElement("td");
   tableDataLanguage.innerText = `${val.Language}`;
   tableRow.appendChild(tableDataLanguage);

   const tableDataEnergy = document.createElement("td");
   tableDataEnergy.innerText = val.Energy.toFixed(2);
   tableRow.appendChild(tableDataEnergy);
   tableDataEnergy.style.textAlign = "right";

   energyTable?.append(tableRow);

   for (let i = 0; i < performance.length; i++) {
      if (performance[i].language === val.Language) {
         performance[i].points += val.Energy;
         break;
      }
   }
});

data.sort((a, b) => a.Time - b.Time);
data.map((val, idx) => {
   const tableRow = document.createElement("tr");

   const tableDataIdx = document.createElement("td");
   tableDataIdx.innerText = `${idx + 1}`;
   tableRow.appendChild(tableDataIdx);

   const tableDataLanguage = document.createElement("td");
   tableDataLanguage.innerText = `${val.Language}`;
   tableRow.appendChild(tableDataLanguage);

   const tableDataTime = document.createElement("td");
   tableDataTime.innerText = val.Time.toFixed(2);
   tableRow.appendChild(tableDataTime);
   tableDataTime.style.textAlign = "right";

   timeTable?.append(tableRow);

   for (let i = 0; i < performance.length; i++) {
      if (performance[i].language === val.Language) {
         performance[i].points += val.Time;
         break;
      }
   }
});

data.sort((a, b) => a.Memory - b.Memory);
data.map((val, idx) => {
   const tableRow = document.createElement("tr");

   const tableDataIdx = document.createElement("td");
   tableDataIdx.innerText = `${idx + 1}`;
   tableRow.appendChild(tableDataIdx);

   const tableDataLanguage = document.createElement("td");
   tableDataLanguage.innerText = `${val.Language}`;
   tableRow.appendChild(tableDataLanguage);

   const tableDataMemory = document.createElement("td");
   tableDataMemory.innerText = val.Memory.toFixed(2);
   tableRow.appendChild(tableDataMemory);
   tableDataMemory.style.textAlign = "right";

   memoryTable?.append(tableRow);

   for (let i = 0; i < performance.length; i++) {
      if (performance[i].language === val.Language) {
         performance[i].points += val.Memory;
         break;
      }
   }
});

performance.sort((a, b) => a.points - b.points);
performance.map((val, idx) => {
   const tableRow = document.createElement("tr");

   const tableDataIdx = document.createElement("td");
   tableDataIdx.innerText = `${idx + 1}`;
   tableRow.appendChild(tableDataIdx);

   const tableDataLanguage = document.createElement("td");
   tableDataLanguage.innerText = `${val.language}`;
   tableRow.appendChild(tableDataLanguage);

   const tableDataPoints = document.createElement("td");
   tableDataPoints.innerText = val.points.toFixed(2);
   tableRow.appendChild(tableDataPoints);
   tableDataPoints.style.textAlign = "right";

   performanceTable?.append(tableRow);
});
