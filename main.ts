//%block="Emakefun"
namespace emakefun {
    /**
     * Protocol command
     */
    export enum CMD {
        //% block="0x81"
        general = 0x81,
        //% block="0x82"
        greetings = 0x82,
    }

    /**
     * Get recognized phrase ID from the device.
     * @param cmd command
     * @returns recognized id (0 if none)
     */
    //% block="Get recognized ID with cmd=$cmd"
    //% subcategory="AsrSpeechRecognition"
    //% cmd.defl=CMD.general
    //% weight=100
    //% blockGap=8
    //% color="#FFA500"
    //% icon="\uf028"
    //% inlineInputMode=inline
    export function getRecognizedId(cmd: CMD = CMD.general): number {
        let buffer = serial.readBuffer(1);
        if (buffer[0] == 0xA5) {
            let buffer3 = serial.readBuffer(7);
            let buffer2 = pins.createBuffer(8);
            buffer2[0] = 0xA5;
            buffer2.write(1, buffer3);

            // Check protocol and extract ID
            if (buffer2[1] == 0xFA && buffer2[2] == 0x00 && buffer2[3] == cmd) {
                let id = buffer2[4] + (buffer2[5] << 8);
                let checksum = buffer2[0] + buffer2[1] + buffer2[2] + buffer2[3] + buffer2[4] + buffer2[5];
                if (buffer2[6] == (checksum & 0xFF) && buffer2[7] == 0xFB) {
                    return id;
                }
            }
        }
        return 0;
    }
}
