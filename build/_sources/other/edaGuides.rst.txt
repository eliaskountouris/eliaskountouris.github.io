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
