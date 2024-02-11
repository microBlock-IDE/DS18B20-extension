Blockly.Python['ds18b20_read'] = function(block) {
  Blockly.Python.definitions_['import_DS18B20'] = 'import DS18B20';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var code = `DS18B20.read(${value_pin})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.JavaScript['ds18b20_read'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.JavaScript.definitions_['include']['DS18B20.h'] = '#include <DS18B20.h>';
  Blockly.JavaScript.definitions_['define']['ds18b'] = `DS18B20 ds18(${value_pin});`;

  var functionName = Blockly.JavaScript.provideFunction_(
    `DS18B20_read`,
    [
      'float ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
      '  float temp = -999.0;',
      '  while (ds18.selectNext()) {',
      '    temp = ds18.getTempC();',
      '  }',
      '  return temp;',
      '}'
    ]
  );

  var code = `${functionName}()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
