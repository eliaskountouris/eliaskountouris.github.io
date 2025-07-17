Blood Glucose Monitor Log
=========================

July 11th 2025
------------

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
