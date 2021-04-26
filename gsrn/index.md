---
layout: default
---

The Global Socket Relay Network (GSRN) is currently being re-written and is scheduled for Q4/2021 release.

The current source is shared with selected developers - [join us on telegram](https://t.me/thcorg). There is nothing special about the GSRN. The entire source is just 577 lines of spagetti python source:
```shell
# wc -l gsrn.py
577 gsrn.py
```

(I had this idea to learn python during covid19 lockdown. It did not go well. It's embarrassing to share shitty code like this. I now hate python. I'm re-writing it in C). It's currently run on a few linux servers in a load-balancing setup.

Some frequenty asked questions:
1. Why is THC running the GSRN infrastructure?  
	*Because we are good at it. Having us run the GSRN means that anyone can use gsocket instantly without the need to set up a server first. It's easy and pragmatic. It's a cloud-service.*

2. What if THC vanishes?  
	*We have been around for over 25 years. We have watched giants of the Internet rise and fail (MySpace, AltaVista, Netscape, Napster, ...) while we are still here - solid as fuck and shining brightly - providing you with reliable tools and services.*

3. Why is THC doing this for free?  
	*At the moment it's not a big cost. You are of course invited to donate (BTC 34mkCS3dDQyTweFc98pEoNUx2tjSbrLfYn - disclaimer: some donations will be spend on beer, cocaine and prostitutes).*

4. Can I run my own GSRN?  
	*Yes. Theoretically. But why would you? It's like asking TOR to run your complete separate TOR network or ask FaceBook to run your own social media server. It's possible but you wont gain anything.*

5. Is it backdoored?  
	*Always assume it is! - but no, it is not backdoored... The gsocket-source is public so you can audit it and compile it from source. The security architecture of gsocket is designed to not rely on the integrity of the GSRN: The GSRN only sees the encrypted traffic. It literrally reads encrypted data from one TCP connection and forwards it to another TCP connection. We do not keep logs. Use the -T flag to enable TOR if you like*.

