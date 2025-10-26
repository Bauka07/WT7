// Task 0: Document Ready & Console Test
$(document).ready(function() {
console.log("jQuery is ready!");
$('#console-output').text('✅ jQuery is ready! (Check console for message)');

// Task 1: Selectors & CSS
$('#change-content').click(function() {
    $('#demo-id').text('Content changed by ID selector!');
    $('.demo-class').html('<strong>Content changed by CLASS selector!</strong>');
    $('p.demo-para').text('Content changed by TAG selector!');
});

$('#change-style').click(function() {
    $('#demo-id').css({
        'background-color': '#4caf50',
        'font-size': '20px',
        'padding': '30px'
    });
    $('.demo-class').css('color', '#ff6b6b');
    $('p.demo-para').css('border', '3px solid #2196F3');
});

// Task 2: Visibility Methods
$('#hide-btn').click(function() {
    $('#visibility-para').hide(500);
});

$('#show-btn').click(function() {
    $('#visibility-para').show(500);
});

$('#toggle-btn').click(function() {
    $('#visibility-para').toggle(500);
});

// Task 3: Fade Methods
$('#fadeIn-btn').click(function() {
    $('#fade-image').fadeIn(1000);
});

$('#fadeOut-btn').click(function() {
    $('#fade-image').fadeOut(1000);
});

$('#fadeToggle-btn').click(function() {
    $('#fade-image').fadeToggle(1000);
});

// Task 4: Slide Methods
$('#slide-trigger').click(function() {
    $('#slide-panel').slideToggle(600);
});

// Task 5: Add & Remove Elements
let itemCount = 2;
$('#add-item').click(function() {
    itemCount++;
    $('#item-list').append('<li>Item ' + itemCount + '</li>');
});

$('#prepend-item').click(function() {
    itemCount++;
    $('#item-list').prepend('<li>Item ' + itemCount + ' (Prepended)</li>');
});

$('#remove-item').click(function() {
    $('#item-list li:last').remove();
});

// Task 6: Modifying Attributes
let imageToggle = false;
$('#change-image').click(function() {
    imageToggle = !imageToggle;
    if(imageToggle) {
        $('#attr-image').attr('src', 'https://picsum.photos/200/150?random=20');
    } else {
        $('#attr-image').attr('src', 'https://picsum.photos/200/150?random=2');
    }
});

$('#change-link').click(function() {
    $('#demo-link').attr('href', 'https://jquery.com').text('Demo Link (jquery.com)');
});

// Task 7: Form Interaction
$('#name-input, #email-input').on('input', function() {
    let name = $('#name-input').val();
    let email = $('#email-input').val();
    $('#form-output').html('<strong>Name:</strong> ' + name + '<br><strong>Email:</strong> ' + email);
});

// Task 8: Basic Animation
$('#animate-basic').click(function() {
    $('#basic-box').animate({
        width: '200px',
        height: '200px',
        left: '100px',
        top: '50px'
    }, 1000);
});

$('#reset-basic').click(function() {
    $('#basic-box').css({
        width: '100px',
        height: '100px',
        left: '0',
        top: '0'
    });
});

// Task 9: Sequential Animations
$('#animate-sequential').click(function() {
    $('#sequential-box')
        .animate({left: '200px'}, 800)
        .animate({top: '100px'}, 800)
        .animate({width: '50px', height: '50px'}, 800)
        .animate({left: '0', top: '0', width: '100px', height: '100px'}, 800);
});

// Task 10: Combined Animation
$('#animate-combined').click(function() {
    $('#combined-box').animate({
        opacity: 0.3,
        width: '250px',
        height: '150px',
        left: '150px',
        top: '80px'
    }, 1500).animate({
        opacity: 1,
        width: '100px',
        height: '100px',
        left: '0',
        top: '0'
    }, 1500);
});

// Mini Project 1: Image Gallery
$('.thumbnail').click(function() {
    let src = $(this).attr('src');
    $('#enlarged-container').html('<img src="' + src.replace('150/100', '500/400') + '" class="enlarged">');
    $('#enlarged-container img').hide().fadeIn(800);
});

// Mini Project 2: Accordion Menu
$('.accordion-header').click(function() {
    $('.accordion-content').not($(this).next()).slideUp(400);
    $(this).next('.accordion-content').slideToggle(400);
});

// Mini Project 3: Bouncing Ball
let bounceInterval;
let bouncing = false;

$('#start-bounce').click(function() {
    if(!bouncing) {
        bouncing = true;
        bounceAnimation();
    }
});

$('#stop-bounce').click(function() {
    bouncing = false;
    clearInterval(bounceInterval);
    $('#bouncing-ball').stop().css({left: '0', top: '0'});
});

function bounceAnimation() {
    $('#bouncing-ball')
        .animate({left: '500px'}, 1500, 'swing')
        .animate({left: '0px'}, 1500, 'swing', function() {
            if(bouncing) bounceAnimation();
        });
}
});