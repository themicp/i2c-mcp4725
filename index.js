const i2c = require('i2c-bus')
const i2c1 = i2c.openSync(1)

const DEFAULT_DEVICE_ADDRESS = 0x62
const CMD_WRITEDAC = 0x40
const CMD_WRITEDACEEPROM = 0x60

const writeI2cBlockPromise = (addr, cmd, length, buffer) => {
    return new Promise((resolve, reject) => {
        i2c1.writeI2cBlock(addr, cmd, length, buffer, (err, bufferWritten, buffer) => {
            if (err) {
                return reject(err);
            }

            resolve(bufferWritten, buffer);
        });
    })
}

const set_voltage = (value, persist = false) => {
    const command = persist ? CMD_WRITEDACEEPROM : CMD_WRITEDAC;

    value = value > 4095 ? 4095 : value;

    return writeI2cBlockPromise(
        DEFAULT_DEVICE_ADDRESS,
        command,
        2,
        Buffer.from([(value >> 4) & 0xFF, (value << 4) & 0xFF])
    );
}

module.exports = {set_voltage};
