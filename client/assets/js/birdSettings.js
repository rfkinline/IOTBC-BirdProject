var colors = Object.values(allColors())

var defaultDNA = {
    "bodyColor" : 51,
    "bellyColor" : 55,
    "eyesColor" : 96,
    "feetColor" : 74,
    "eyesShape" : 1,
    "hairShape" : 1,
    "eggColorto" : 22,
    "eggColorfrom" : 18,
    "animation" : 1,
    "lastNum" : 1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.bodyColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnafeet').html(defaultDNA.feetColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnahairshape').html(defaultDNA.hairShape)
  $('#dnaeggColorto').html(defaultDNA.eggColorto)
  $('#dnaeggColorfrom').html(defaultDNA.eggColorfrom)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)
  renderBird(defaultDNA)
});

function defaultBird(){
  renderBird(defaultDNA)
}

function randomDNA(){
  var dnaStr = String(Math.floor(Math.random()*1E16))
  var dna = {
    "bodyColor" : dnaStr.substring(0, 2),
    "bellyColor" : dnaStr.substring(2, 4),
    "eyesColor" : dnaStr.substring(4, 6),
    "feetColor" : dnaStr.substring(6, 8),
    "eyesShape" : dnaStr.substring(8, 9) % 2 + 1,
    "hairShape" : dnaStr.substring(9, 10) % 2 + 1,
    "eggColorto" : dnaStr.substring(10, 12),
    "eggColorfrom" : dnaStr.substring(12, 14),
    "animation" : dnaStr.substring(14, 15) % 4 + 1,
    "lastNum" : dnaStr.substring(15, 16),
  }
  return dna
}

function randomBird(){
  var dna = randomDNA()
  renderBird(dna)
}

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnabelly').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnafeet').html()
    dna += $('#dnashape').html()
    dna += $('#dnahairshape').html()
    dna += $('#dnaeggColorto').html()
    dna += $('#dnaeggColorfrom').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()
    return parseInt(dna)
}

function renderBird(dna){
  bodyColor(colors[dna.bodyColor],dna.bodyColor)
  $('#bodyColor').val(dna.bodyColor)   // initial value of slider
  bellyColor(colors[dna.bellyColor],dna.bellyColor)
  $('#bellyColor').val(dna.bellyColor)
  eyesColor(colors[dna.eyesColor],dna.eyesColor)
  $('#eyesColor').val(dna.eyesColor)
  feetColor(colors[dna.feetColor],dna.feetColor)
  $('#feetColor').val(dna.feetColor)
  eyesShape(dna.eyesShape)
  $('#eyesShape').val(dna.eyesShape)
  hairShape(dna.hairShape)
  $('#hairShape').val(dna.hairShape)
  animationVariation(dna.animation)
  $('#animation').val(dna.animation)
  eggColorto(colors[dna.eggColorto],dna.eggColorto)
  $('#eggColorto').val(dna.eggColorto)
  eggColorfrom(colors[dna.eggColorfrom],dna.eggColorfrom)
  $('#eggColorfrom').val(dna.eggColorfrom)
}

// Changing bird colors
$('#bodyColor').change(()=>{
  var colorVal = $('#bodyColor').val()
  bodyColor(colors[colorVal],colorVal)
})

// Changing belly colors
$('#bellyColor').change(()=>{
  var colorVal = $('#bellyColor').val()
  bellyColor(colors[colorVal],colorVal)
})


// Changing eyes colors
$('#eyesColor').change(()=>{
  var colorVal = $('#eyesColor').val()
  eyesColor(colors[colorVal],colorVal)
})

$('#feetColor').change(()=>{
  var colorVal = $('#feetColor').val()
  feetColor(colors[colorVal],colorVal)
})

$('#eyesShape').change(()=>{
  var shape = parseInt($('#eyesShape').val())
  eyesShape(shape)
})

$('#hairShape').change(()=>{
  var shape = parseInt($('#hairShape').val())
  hairShape(shape)
})

$('#animation').change(()=>{
  var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})

$('#eggColorto').change(()=>{
  var colorVal = $('#eggColorto').val()
  eggColorto(colors[colorVal],colorVal)
})

$('#eggColorfrom').change(()=>{
  var colorVal = $('#eggColorfrom').val()
  eggColorfrom(colors[colorVal],colorVal)
})
