Blood Glucose Montior
=====================

The change log can be found here :doc:`log`

Overview
--------

Glucose disolved in water it's charecteristic impedance. RF based sensors can detect changes in this charecteristic impedance, and thus detect changes in blood glucose. Research has also demonstrated multiband measurments can greatly increase the accuracy of these sensors. This project aims to create a wearable device that levrages a multiband resonator to determine changes in the user's blood glucose level.

The system will use PLL Frequency Generator and IQ Demodulator to measure the magnitude and phase shift through the resonator. Data will be held on device until it can be transfered to the user's phone via NFC. From there, data will be processed to determine the user's blood glucose levels.

V1 - Measurment Dev Board
=========================

Overview
--------

* This board hosts all the required measurment and data transfer hardware 
* It does not have a resonator built in, instead it connects the PLL output / IQ demodulator input to SMA connectors
    * This allows rapid (and cheap) prototyping of the resonator structure
* Due to limited time it does not include a lithium ion battery PMIC

Discovered Issues
-----------------

* The 5V rail LDO drops down too low
    * A lower dropout LDO or a high voltage boost will be needed 
* The PLL pseudo-SPI interface is not connected to the SPI1 peripheral correctly
    * In the future a MCU GPIO connection doc should be created ASAP
* The balun pads are big enough to be pick and placed but way too small to do by hand
    * Was able to use solder paste + heatgun to attach
* The USB PD controller has its SDA and SCL pins swapped
    * Was able to bypass in SW
