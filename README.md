Fork of [emakefun_asr_speech_recognition](https://github.com/emakefun-makecode-extensions/emakefun_asr_speech_recognition)  
# Usage
```typescript
let id = 0
basic.showIcon(IconNames.Happy)
serial.redirect(
SerialPin.USB_TX,
SerialPin.P0,
BaudRate.BaudRate9600
)
basic.forever(function () {
    id = emakefun.getRecognizedId(emakefun.CMD.general)
    if (id == 1) {
        serial.writeLine("Open Smart Manager！")
        basic.showIcon(IconNames.Heart)
    } else if (id == 2) {
        serial.writeLine("Turn on the air conditioner！")
        basic.showIcon(IconNames.Yes)
    } else if (id == 3) {
        serial.writeLine("Turn off the air conditioner！")
        basic.showIcon(IconNames.No)
    }
})
```


> Open this page at [https://.github.io//](https://.github.io//)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open []()
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/** and import

## Edit this project

To edit this repository in MakeCode.

* open []()
* click on **Import** then click on **Import URL**
* paste **https://github.com/** and click import

#### Metadata (used for search, rendering)

* for PXT/
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
