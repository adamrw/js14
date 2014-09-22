$(document).on('ready', function() {
  
var outerShell=$('<div class="outerShell"></div>');
var innerShell=$('<div class="innerShell"></div>');
// var leftAm=$('<div class="leftAm">AM</div>');
var leftPm=$('<div class="leftPm">PM</div?>');
var leftAuto=$('<div class="leftAuto">Auto</div>');
var clockScreen=$('<div class="clockScreen"></div>');
var ampmIndicator=$('<div class="ampmIndicator">.</div>');
var clockText=$('<div class="clockText"><p>12 : 17</p></div>');
var amFrequencies=$('<div class="amFrequencies"><p>AM    53 60 70 90 110 140 170    KHz</p></div>');
var fmFrequencies=$('<div class="fmFrequencies"><p>FM     88 92 96 102 106 108      MHz</p></div>');

$('.container').append(outerShell); 
outerShell.append(innerShell);
// innerShell.append(leftAm);
innerShell.append(leftPm);
innerShell.append(leftAuto);
innerShell.append(clockScreen);
clockScreen.append(ampmIndicator);
clockScreen.append(clockText);
innerShell.append(amFrequencies);
innerShell.append(fmFrequencies);



});