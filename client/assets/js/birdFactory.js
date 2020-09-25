//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function bodyColor(color,code) {
    entry = gradient_table[code].name
    $('.bird').css('background', '#' + color)  //This changes the color of the bird
    $('#birdname').html(entry)
    $('#bodyCode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the bird
}

function bellyColor(color,code) {
    $('.belly').css('background', '#' + color)  
    $('#bellyCode').html('code: '+ code) 
    $('#dnabelly').html(code) 
}

function eyesColor(color,code) {
    $('.left-eye, .right-eye').css('background', '#' + color)  
    $('#eyesCode').html('code: '+ code)
    $('#dnaeyes').html(code)
}

function eggColorfrom(color,code) {
    var rgba = '#' + color;
    var rgbaTwo = "rgba(110,131,37,0.5)";
    $('.egg').css( 'background' , 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ')')
//    $('.egg').css( "background-image", "linear-gradient( to right, #dc8a8a 50%, red 10% )" )
    $('#eggColorfromcode').html('code: '+ code)
    $('#dnaeggColorfrom').html(code)
}

function eggColorto(color,code) {
    var rgba = "rgba(110,131,37,0.5)";
    var rgbaTwo = '#' + color;
    $('.egg').css( 'background' , 'linear-gradient(to right,' + rgba + ', ' + rgbaTwo + ')')
//    $('.egg').css( "background-image", "linear-gradient( to right, #dc8a8a 50%, red 10% )" )
    $('#eggColortocode').html('code: '+ code)
    $('#dnaeggColorto').html(code)
}

function feetColor(color,code) {
    $('.right-foot, .left-foot').css('border-bottom-color', '#' + color)
    $('#feetCode').html('code: '+ code) 
    $('#dnafeet').html(code) 
}

function eyesShape(num) {
    $('#dnashape').html(num)
// switch is like a simple if-statement    
    switch (num) {
        case 1:
            normalEyes();
            $('#eyesshapeCode').html('Round');
            break
        case 2:
            normalEyes();
            $('#eyesshapeCode').html('Square');
            eyeType1();
            break
        }
}

function hairShape(num) {
    $('#dnahairshape').html(num)
    switch (num) {
        case 1:
            $('#hairvariationCode').html('Basic');
            normalhairshape();
            break
        case 2:
            normalhairshape();
            $('#hairvariationCode').html('Individual');
            hairType1();
            break
    }
}

function animationVariation(num) {
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            $('#animationName').html('No animation');
            noAnimation();
            break
        case 2:
            $('#animationName').html('Eye movement');
            animationType1();
            break
        case 3:
            $('#animationName').html('Right Wing');
            animationType2();
            break
        case 4:
            $('#animationName').html('Left Wing');
            animationType3();
            break
    }
}

async function normalEyes() {
    await $('.left-eye, .right-eye').find('span').css('border-radius', '50%')   // take left-eye element and find all of the span within that element
}

async function eyeType1() {
    await $('.left-eye, .right-eye').find('span').css('border-radius', '0%')
}

async function normalhairshape() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the hair Shape style
    $('.hair-left').css({ "top": "0px", "right": "95px", "background": "#fdbd2c", "width": "80px", "height": "20px", "transform": "rotate(165deg)", "border-bottom-right-radius": "30px" })
    $('.hair-middle').css({ "top": "1px", "right": "73px", "background": "#fdbd2c", "width": "41px", "height": "34px", "transform": "rotate(120deg)", "border-bottom-right-radius": "30px" })
    $('.hair-right').css({ "top": "1px", "right": "22px", "background": "#fdbd2c", "width": "80px", "height": "20px", "transform": "rotate(15deg)", "border-bottom-right-radius": "30px" })
}
async function hairType1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the hair Shape style
    $('.hair-left').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.hair-middle').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.hair-right').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "5px", "right": "53px", "border-radius": "0 50% 50% 50%" })
}

function animationType1() {
    // Reset  prior animation first
    noAnimation();
    $(".inner-eye").addClass("movingEyes");
}
function animationType2() {
    // Reset  prior animation first
    noAnimation();
    $(".right-wing").addClass("rightWing");
}
function animationType3() {
    // Reset  prior animation first
    noAnimation();
    $(".left-wing").addClass("leftWing");
}
function noAnimation() {
    $(".inner-eye").removeClass("movingEyes");
    $(".right-wing").removeClass("rightWing");
    $(".left-wing").removeClass("leftWing");
}
