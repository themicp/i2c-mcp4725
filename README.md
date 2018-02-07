# i2c-mcp4725
Node.js library to communicate with MCP4725 over I2C

Ported version of Adafruit's Python library (https://github.com/adafruit/Adafruit_Python_MCP4725/)

MCP4725 Datasheet: https://www.sparkfun.com/datasheets/BreakoutBoards/MCP4725.pdf

## Example
``` javascript
const mcp4725 = require('./index.js');

(async () => {
    // sets the voltage to 50% of VDD
    await mcp4725.setVoltage(2048);

    // sets the voltage to 100% of VDD
    await mcp4725.setVoltage(4095);

    // sets the voltage to 0% of VDD
    await mcp4725.setVoltage(0);
})();
