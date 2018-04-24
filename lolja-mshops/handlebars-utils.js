function _calculatePercentage(value, percent){
  return  qd_number_format(value - (value * percent / 100), 2, ",", ".");
}
function _qdNumberFormat(value) {
  return  qd_number_format(value, 2, ",", ".");
}

Handlebars.registerHelper('calculatePercentage', function(value, percent) { return _calculatePercentage(value, percent); });
Handlebars.registerHelper('eq', function(a, b, block) { return a == b ? block.fn(this) : block.inverse(this); });
Handlebars.registerHelper('numberFormat', function(value, percent) { return _qdNumberFormat(value); });