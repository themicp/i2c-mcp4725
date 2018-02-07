const mcp4725 = require('./index.js');

(async () => {
    // sets the voltage to 50% of VDD
    await mcp4725.setVoltage(2048);

    // sets the voltage to 100% of VDD
    await mcp4725.setVoltage(4095);

    // sets the voltage to 0% of VDD
    await mcp4725.setVoltage(0);
})();
