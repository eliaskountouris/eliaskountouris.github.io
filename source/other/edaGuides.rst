Notes on EDA Setups
===================

I'm currently using Fedora 41 as my daily driver. On this page I'll log the steps needed to get various EDA tools running properly.

Vivado 2024.2
-------------
To install succesfully:

1. Download the linux installer binary
2. Run the following commands before installing

.. code-block:: bash

    sudo dnf install ncurses
    sudo dnf install ncurses-devel
    sudo dnf install ncurses-compat-libs

3. Install the standard Vivado version

4. Once vivado is installed succesfully, you must install the cable drivers

.. code-block:: bash

    sudo ./tools/Xilinx/Vivado/2024.2/data/xicom/cable_drivers/lin64/install_script/install_drivers/install_drivers

X11-Wayland GUI Scaling
-----------------------
To scale X11 forwared applications when using wayland locally, set the following variables on the remote:

.. code-block:: bash

    QT_AUTO_SCREEN_SCALE_FACTOR=0
    QT_SCALE_FACTOR=2 

