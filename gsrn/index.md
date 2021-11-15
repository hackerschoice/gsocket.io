---
layout: default
---

The Global Socket Relay Network (GSRN) is run, operated and maintained by volunteers. You can use gsocket without running your own GSRN. The GSRN service is provided for free.

Some frequenty asked questions:
1. Why is THC running the GSRN infrastructure?  
	*Because we are good at it. Having us run the GSRN means that anyone can use gsocket instantly without the need to set up a server first. It's easy and pragmatic. It's a cloud-service.*

2. What if THC vanishes?  
	*We have been around for over 25 years. We have watched giants of the Internet rise and fail (MySpace, AltaVista, Netscape, Napster, ...) while we are still here - solid as fuck and shining brightly - providing you with reliable tools and services.*

3. Why is THC doing this for free?  
	*At the moment it's not a big cost. You are invited to donate (BTC 34mkCS3dDQyTweFc98pEoNUx2tjSbrLfYn).*

4. Can I run my own GSRN?  
	*Yes. Theoretically. But why would you? It's like asking TOR to run your complete separate TOR network or ask FaceBook to run your own social media server. It's possible but you wont gain anything.*

5. Is it backdoored?  
	*Always assume it is! - but no, it is not backdoored... The gsocket-source is public so you can audit it and compile it from source. The security architecture of gsocket is designed to not rely on the integrity of the GSRN: The GSRN only sees the encrypted traffic. It literrally reads encrypted data from one TCP connection and forwards it to another TCP connection. We do not keep logs. Use the -T flag to enable TOR if you like*.

The GSRN source code is available at [https://github.com/hackerschoice/gsocket-relay](https://github.com/hackerschoice/gsocket-relay).

[Join us on telegram](https://t.me/thcorg).
