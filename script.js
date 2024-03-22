const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
const alexPoints = 75;
const jessiePoints = 99;
const didAlexPass = !false;
const samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " + maxPoints;
const jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(samPointsDisplay);
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
const samPercentage = (samPoints/maxPoints)*100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
const alexPercentage = (alexPoints/maxPoints)*100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
const jessiePercentage = (jessiePoints/maxPoints)*100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
const samMissedPoints = maxPoints - samPoints;
const alexMissedPoints = maxPoints - alexPoints;
const jessieMissedPoints = maxPoints - jessiePoints;
const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s)."
console.log(samMissedPointsDisplay);
const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s)."
console.log(alexMissedPointsDisplay);
const jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s)."
console.log(jessieMissedPointsDisplay);

const classAveragePoints = (alexPoints + samPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay);

const alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);


const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Precentages";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes"