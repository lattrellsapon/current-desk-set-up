let currentDeskSetUp = document.getElementById('current-desk-set-up');

currentDeskSetUp.onmouseover = showRGB;
currentDeskSetUp.onmouseout = hideRGB;

function showRGB()
{
    currentDeskSetUp.src = 'images/dark-after.JPG';
}
function hideRGB()
{
    currentDeskSetUp.src = 'images/light-desk.JPG';
}
