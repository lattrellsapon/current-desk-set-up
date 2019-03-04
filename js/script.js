// const setupImage = document.getElementById('setup');
// const userMessageDiv = document.getElementById('userMessage');
// const peripheralsDiv = document.getElementsByClassName('peripherals');


// $('#letsGetStartedButton').click(function ()
// {   
//     // $('#mainBody').fadeIn(10000);
//     // $('#mainBody').fadein();
//     $('#mainBody').css('visibility', 'visible').fadeIn(3000);
//     $('#letsGetStartedButton').fadeOut();
//     // $('#mainBody').fadein();
//     // $('#mainBody').fadeIn();
    
// });

// $('#setup').click(function()
// {
//     $('#userMessage').fadeOut(1000);
//     $('.peripherals').fadeIn();
    
// });

// $('#hidePeripheralsButton').click(function()
// {
//     $('.peripherals').fadeOut(3000);
//     $('#hidePeripheralsButton').hide();
// });    

// setupImage.addEventListener("click", function ()
// {   
//     // userMessageDiv.style.display = "none";
//     setupImage.src='images/desksetup-after.jpg';
    
// });

const rgbButton = document.getElementById('rgb-button');
const setupImg = document.getElementById('setup');


// Jquery slide down effect and show main body
$('#start').click(function () 
{
    $('#start').css('display', 'none');
    $('#begin').fadeIn();
    $('#main-body').slideDown(2000);
});

$('#begin').click(function () 
{
    $('#begin').css('display', 'none');
    $('#start').fadeIn();
    $('#main-body').slideUp(1000);
    $('#setup').attr('src', 'images/desksetup-before.jpg')
    $('#rgb-button').show();
    $('#laptop-images').show();
    $('#monitor-images').show();
    $('#headphones-images').show();
    $('#keyboard-images').show();
    $('#mouse-images').show();

});

$('#setup').click(function ()
{
    $('#user-message').remove();
});

$('#rgb-button').click(function () 
{
    $('#rgb-button').fadeOut(1000);
    $('#setup').attr('src', 'images/desksetup-after.jpg')
});


// Hide Laptop
$('#hide-laptop').click(function ()
{   
    $('#hide-laptop').hide();
    $('#laptop-images').slideUp(1500);
    $('#show-laptop').show();
});
// Show Laptop
$('#show-laptop').click(function ()
{   
    $('#show-laptop').hide();
    $('#laptop-images').slideDown(1500);
    $('#hide-laptop').show();
});
// Hide Monitor
$('#hide-monitor').click(function ()
{
    $('#hide-monitor').hide();
    $('#monitor-images').slideUp(1500);
    $('#show-monitor').show();
});
// Show Monitor
$('#show-monitor').click(function ()
{
    $('#show-monitor').hide();
    $('#monitor-images').slideDown(1500);
    $('#hide-monitor').show();
});
// Hide Headphones
$('#hide-headphones').click(function ()
{   
    $('#hide-headphones').hide();
    $('#headphones-images').slideUp(1500);
    $('#show-headphones').show();
});
// Show Headphones
$('#show-headphones').click(function ()
{   
    $('#show-headphones').hide();
    $('#headphones-images').slideDown(1500);
    $('#hide-headphones').show();
});
// Hide Keyboard
$('#hide-keyboard').click(function ()
{   
    $('#hide-keyboard').hide();
    $('#keyboard-images').slideUp(1500);
    $('#show-keyboard').show();
});
// Show Keyboard
$('#show-keyboard').click(function ()
{
    $('#show-keyboard').hide();
    $('#keyboard-images').slideDown(1500);
    $('#hide-keyboard').show();
});
// Hide Mouse
$('#hide-mouse').click(function ()
{   
    $('#hide-mouse').hide();
    $('#mouse-images').slideUp(1500);
    $('#show-mouse').show();
});
// Show Mouse
$('#show-mouse').click(function ()
{   
    $('#show-mouse').hide();
    $('#mouse-images').slideDown(1500);
    $('#hide-mouse').show();
});



