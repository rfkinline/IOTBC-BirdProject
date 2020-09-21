
var colors = Object.values(allColors())

var defaultDNA = {
    "bodyColor" : 12,
    "bellyColor" : 55,
    "eyesColor" : 96,
    "feetColor" : 50,
    "eyesShape" : 1,
    "hairShape" : 1,
    "appearSun" : 2,
    "sunColor" : 18,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.bodyColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnafeet').html(defaultDNA.feetColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnahairshape').html(defaultDNA.hairShape)
  $('#dnaappearsun').html(defaultDNA.appearSun)
  $('#dnasuncolor').html(defaultDNA.sunColor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)
  renderBird(defaultDNA)
});

function defaultBird(){
  renderBird(defaultDNA)
}

function randomDNA(){
  var dnaStr = String(Math.floor(Math.random()*1E16))
  console.log(dnaStr.substring(11, 13))
  var dna = {
    "bodyColor" : dnaStr.substring(0, 2),
    "bellyColor" : dnaStr.substring(2, 4),
    "eyesColor" : dnaStr.substring(4, 6),
    "feetColor" : dnaStr.substring(6, 8),
    "eyesShape" : dnaStr.substring(8, 9) % 2 + 1,
    "hairShape" : dnaStr.substring(9, 10) % 2 + 1,
    "appearSun" : dnaStr.substring(10, 11) % 3 + 1,
    "sunColor" : dnaStr.substring(11, 13),
    "animation" : dnaStr.substring(13, 14),
    "lastNum" : dnaStr.substring(14, 15),
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
    dna += $('#dnaappearsun').html()
    dna += $('#dnasuncolor').html()
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
  sunVariation(dna.appearSun)
  $('#appearSun').val(dna.appearSun)
  sunColor(colors[dna.sunColor],dna.sunColor)
  $('#sunColor').val(dna.sunColor)
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

$('#sunColor').change(()=>{
  var colorVal = $('#sunColor').val()
  sunColor(colors[colorVal],colorVal)
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

$('#appearSun').change(()=>{
  var sunVal = parseInt($('#appearSun').val())
  sunVariation(sunVal)
})