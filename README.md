httpsnow
========

Do you want https://localhost to actually work? I did.

I want a simple script to serve a directory RIGHT NOW with https. It's always been a pain.

Unfortunately the headache of keys never goes away.

deps
====

* python
* openssl

I use python because it does the mime-types properly for the base http server.

installation
============

Please checkout to ~/projects/httpsnow/

    mkdir -p ~/projects/
    cd ~/projects/
    git clone https://github.com/abramhindle/httpsnow
    cd httpsnow
    make install
    # now put httpsnow somewhere

Now you have to setup firefox and chrome for some reason because they ignore these certs.

chrome
======

Works with Chrome 60 as far as I can tell.

Go to settings -> advanced -> Manage Certificates -> Authorities -> import

After "make install" install ~/projects/httpsnow/localhostCA.crt  into Authorities

Firefox
=======

Preferences -> Advanced -> Certificates -> View Certificates -> Authorities -> import
Or go to Preferences and Search for Certificates, then -> View Certificates -> Authorities -> import

After "make install" install ~/projects/httpsnow/localhostCA.crt  into Authorities

Usage
=====

Install httpsnow into your PATH somewhere.

Then in a directory you want to serve run:

    $ httpsnow
    https://localhost:44330/

And click the link!

License
=======

Apache 2.0 unless otherwise stated

