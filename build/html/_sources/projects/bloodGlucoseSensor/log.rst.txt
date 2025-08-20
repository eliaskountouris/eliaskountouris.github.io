Blood Glucose Monitor Log
=========================

July 11th 2025
---------------

* Boards arrive
* Boards boot up
    * Able to establish communication with the RP2040
* 5V analog rail only reaches 4.4V on all boards
    * Dropout of LDO is larger than expected
    * I tried increasing the boost output, but it the rail doesn't reach the needed minimum 4.75V
    * For temporary fix, I will connect the rail directly to the USB VDD
        * This will introduce switch noise but there isn't much that can be done about it
    * For long term fix, new LDO / boost needs to be sourced
        * Also add some way to gate the 5V rail to save power

July 15th 2025
--------------

* Initial FW flashed an written to the boards
    * It was discovered that the PLL SPI interface is not connected correctly
    * SW based SPI can be used as temporary work around

July 23rd 2025
--------------

* All components able to be communicated with except for USB PD
* NFC does respond over I2C but we can't read off NFC antenna

July 24th 2025
--------------

* Realized USB PD has I2C pins swapped
    * Cut traces on one board to try to physically swapped the connections
    * Realized that this could be patched in SW by using a software defined I2C connection for the USB PD, and then swapping to I2C peripheral for the other components
* Isues soldering balun
    * Pads are way to small to do by hand
        * Future revision pads should be made much wider to support handsoldering
        * Going to attempt to try solder paste
* Measured resonator response on VNA
    * Used plastic bag filled with water and glucose to test different blood sugar levels
    * Measurable change in center frequency
* Couldn't get PLL to output
    * PLL says it is locking and outputing wave
    * Unclear if it is actually outputting, can't be detected

July 25th 2025
--------------

* Checked PLL out with AC multimeter
    * Reading only 0.15Vrms (-3.5dBm) output
* Connected PLL to oscillisciope to measure 40Mhz output, nothing read
    * Issues with FW writing to PLL registers
    * Looked at SW defined SPI interface
    * Was able to interact with it and load registers
    * 600mVpp, 100kHz wave generate, PLL wasn't locking
* Attempted to use solder paste + heat gun to attach balun, succesful
    * Went back and redid other boards baluns
* Was able to repair other board with the torn adjust resistor pad
    * Directly bridge resistor from +5V pad to pin

July 27th 2025
--------------

* Was able to drive clean 70MHz sine wave output from PLL
    * 70MHz is max we could measure on scope
* Issues with NFC, antenna doesn't seem to be receiving anything
* Issues with ADC, incorrect values

July 28th 2025
--------------

* Confirmed NFC can recieve signals with a peak to peak voltage of over 3V
    * Investigating the packet format to see if its a phone issue
* ADC is having issues reading the proper value
    * If it cannot be solved we will just attempt to read the output using a scope
