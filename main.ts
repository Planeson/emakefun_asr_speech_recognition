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
     * Read protocol
     * @param cmd command
     * @param id id
     * @returns boolean
    */
    //% block="Read Data  cmd=$cmd id=$id"
    //% subcategory="AsrSpeechRecognition"
    //% cmd.defl=CMD.general
    //% id.defl=0x01 id.min=0x01 id.max=0xFF
    //% weight=100
    //% blockGap=8
    //% color="#FFA500"
    //% icon="\uf028"
    //% inlineInputMode=inline
    export function readData(cmd: CMD = CMD.general, id: number): boolean {
        let buffer = serial.readBuffer(1);//读取一个字节数据
        if (buffer[0] == 0xA5) {
            let buffer3 = serial.readBuffer(7); // 创建一个长度为8的缓冲区
            let buffer2 = pins.createBuffer(8); // 创建一个长度为8的缓冲区
            buffer2[0] = 0xA5;
            buffer2.write(1, buffer3);
            let buffer1 = pins.createBuffer(8); // 创建一个长度为8的缓冲区
            buffer1[0] = 0xA5;
            buffer1[1] = 0xFA;
            buffer1[2] = 0x00;
            buffer1[3] = cmd;
            buffer1[4] = id % 256;
            buffer1[5] = id >> 8; // 注意这里使用了位移操作符替代除法，以确保结果是整数
            buffer1[6] = buffer1[0] + buffer1[1] + buffer1[2] + buffer1[3] + buffer1[4] + buffer1[5];
            buffer1[7] = 0xFB;
            if (buffer2.equals(buffer1)) {
                return true;
            }
            else {
                return false;
            }
            //serial.writeBuffer(buffer2); // 发送缓冲区数据
        }
        return false;
    }  // 读取缓冲区数据
}   