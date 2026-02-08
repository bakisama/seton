---
title: Crypto CTF Tools
---
# CRYPTO CTF PRACTICE (De-duplicated + Ranked)

## ⭐ Tier 1 — You’ll use these constantly (CTF core)

- **CyberChef** – drag-and-drop “Swiss army knife” for encodings, XOR, hashes, AES, and transforms  
    [https://gchq.github.io/CyberChef/](https://gchq.github.io/CyberChef/)
    
- **dCode** – best all-in-one classical cipher solver (Caesar, Vigenère, substitution, etc.)  
    [https://www.dcode.fr/](https://www.dcode.fr/)
    
- **Cryptii** – interactive encoder/decoder playground for quick conversions and cipher testing  
    [https://cryptii.com/](https://cryptii.com/)
    
- **quipqiup** – automatic substitution cipher breaker (insanely useful)  
    [https://quipqiup.com/](https://quipqiup.com/)
    
- **SageCell (SageMath online)** – quick modular arithmetic, RSA math, CRT, inverses  
    [https://sagecell.sagemath.org/](https://sagecell.sagemath.org/)
    
- **FactorDB** – checks if RSA moduli / big integers are already factorable/known  
    [http://factordb.com/](http://factordb.com/)
    

---

## 🔥 Tier 2 — Most relevant for Krypton-style questions

- **OverTheWire Krypton** – classical crypto wargame (frequency analysis, Vigenère, etc.)  
    [https://overthewire.org/wargames/krypton/](https://overthewire.org/wargames/krypton/)
    
- **CryptoHack** – hands-on modern crypto challenges (RSA, AES, ECC, padding, MACs)  
    [https://cryptohack.org/challenges/](https://cryptohack.org/challenges/)
    
- **Cryptopals** – legendary structured crypto challenge set teaching real crypto attacks  
    [https://cryptopals.com/](https://cryptopals.com/)
    
- **Root-Me Cryptanalysis** – strong cryptanalysis challenge bank (classical + modern)  
    [https://www.root-me.org/en/Challenges/Cryptanalysis/](https://www.root-me.org/en/Challenges/Cryptanalysis/)
    
- **picoCTF Crypto** – beginner-friendly crypto problems for practice and speed  
    [https://play.picoctf.org/practice?category=2&page=1](https://play.picoctf.org/practice?category=2&page=1)
    
- **RingZer0 Crypto** – mixed crypto challenge set (classical + RSA-style)  
    [https://ringzer0ctf.com/challenges](https://ringzer0ctf.com/challenges)
    
- **TryToDecrypt** – puzzle-style crypto decoding challenges  
    [https://www.trytodecrypt.com/decrypt.php?id=1](https://www.trytodecrypt.com/decrypt.php?id=1)
    
- **HBH Decryption** – small set of decoding challenges  
    [https://hbh.sh/challenges/decryption](https://hbh.sh/challenges/decryption)
    
- **CryptoTool** – educational crypto suite (visual + interactive)  
    [https://www.cryptool.org/en/](https://www.cryptool.org/en/)
    

---

## 🧠 Tier 3 — RSA / public-key tools (very common in CTFs)

- **RsaCtfTool** – automated RSA attack suite (Wiener, common modulus, low exponent, etc.)  
    [https://github.com/RsaCtfTool/RsaCtfTool](https://github.com/RsaCtfTool/RsaCtfTool)
    
- **rsatool** – generates/inspects RSA keys and extracts parameters (n, e, p, q)  
    [https://github.com/ius/rsatool](https://github.com/ius/rsatool)
    
- **id0-rsa** – RSA-focused challenge site teaching classic RSA vulnerabilities  
    [https://id0-rsa.pub/](https://id0-rsa.pub/)
    
- **Msieve** – advanced integer factorization tool (when RSA modulus is hard)  
    [https://sourceforge.net/projects/msieve/](https://sourceforge.net/projects/msieve/)
    
- **YAFU** – fast factorization tool for large composites (when FactorDB fails)  
    [https://sourceforge.net/projects/yafu/](https://sourceforge.net/projects/yafu/)
    
- **pemcrack** – attacks weak/guessable passphrases protecting PEM private keys  
    [https://github.com/robertdavidgraham/pemcrack](https://github.com/robertdavidgraham/pemcrack)
    

---

## 🧾 Tier 4 — Classical cipher analysis helpers (Krypton-tier)

- **Guballa Vigenère Solver** – strong automatic Vigenère cracker  
    [https://www.guballa.de/vigenere-solver](https://www.guballa.de/vigenere-solver)
    
- **Guballa Substitution Solver** – interactive substitution solver with good heuristics  
    [https://www.guballa.de/substitution-solver](https://www.guballa.de/substitution-solver)
    
- **Boxentriq Analysis** – frequency analysis + classical cipher helper suite  
    [https://www.boxentriq.com/analysis](https://www.boxentriq.com/analysis)
    
- **Rumkin Atbash** – quick Atbash decoder (and other simple ciphers)  
    [https://rumkin.com/tools/cipher/atbash/](https://rumkin.com/tools/cipher/atbash/)
    
- **MyGeocachingProfile Vigenère** – Vigenère encoder/decoder + basic solver  
    [https://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx](https://www.mygeocachingprofile.com/codebreaker.vigenerecipher.aspx)
    

---

## ⚔️ Tier 5 — XOR + stream cipher helpers (sometimes critical)

- **xortool** – detects repeating-key XOR and helps recover key lengths/keys  
    [https://github.com/hellman/xortool](https://github.com/hellman/xortool)
    
- **xor.pw** – quick XOR helper for short ciphertexts  
    [https://xor.pw/](https://xor.pw/)
    
- **cribdrag** – crib dragging tool for OTP reuse / stream cipher reuse attacks  
    [https://github.com/SpiderLabs/cribdrag](https://github.com/SpiderLabs/cribdrag)
    

---

## 🔐 Tier 6 — Hash cracking / hash identification (sometimes “crypto”)

- **Kali hash-identifier** – guesses the hash algorithm from format/length  
    [https://www.kali.org/tools/hash-identifier/](https://www.kali.org/tools/hash-identifier/)
    
- **CrackStation** – fast lookup for unsalted hashes  
    [https://crackstation.net/](https://crackstation.net/)
    
- **OnlineHashCrack** – web-based cracking service (hit-or-miss)  
    [https://www.onlinehashcrack.com/](https://www.onlinehashcrack.com/)
    
- **md5decrypt.net** – database-based cracking for common hashes  
    [https://md5decrypt.net/en/](https://md5decrypt.net/en/)
    
- **hashkill** – password cracking suite (less common now vs hashcat/john)  
    [https://github.com/gat3way/hashkill](https://github.com/gat3way/hashkill)
    

---

## 🧨 Tier 7 — Crypto implementation attacks (rare but huge when they appear)

- **hash_extender** – performs hash length extension attacks (MD5/SHA1 constructions)  
    [https://github.com/iagox86/hash_extender](https://github.com/iagox86/hash_extender)
    
- **HashPump-partialhash** – another length extension tool variant  
    [https://github.com/mheistermann/HashPump-partialhash](https://github.com/mheistermann/HashPump-partialhash)
    
- **padding-oracle-attacker** – automates CBC padding oracle attacks  
    [https://github.com/KishanBagaria/padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker)
    
- **python-paddingoracle** – framework for implementing padding oracle attacks  
    [https://github.com/mwielgoszewski/python-paddingoracle](https://github.com/mwielgoszewski/python-paddingoracle)
    

---

## 🧪 Tier 8 — Niche but still valid crypto/CTF tools

- **PKCrack** – attacks legacy ZipCrypto encryption for older ZIP files  
    [https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html)
    
- **reveng** – CRC reversing tool (rare but useful)  
    [https://reveng.sourceforge.io/](https://reveng.sourceforge.io/)
    
- **hashclash** – collision-generation research toolkit (very rare in CTFs)  
    [https://marc-stevens.nl/research/hashclash/](https://marc-stevens.nl/research/hashclash/)
    
- **Python random-module cracker** – attacks weak Python `random` usage in challenges  
    [https://github.com/tna0y/Python-random-module-cracker](https://github.com/tna0y/Python-random-module-cracker)
    

---

## 🎧 Tier 9 — Weird-signal / puzzle decoders (occasional)

- **Morse translator** – quick Morse encoding/decoding  
    [https://morsecode.world/international/translator.html](https://morsecode.world/international/translator.html)
    
- **DialABC sound detect** – detects DTMF tones from audio files  
    [http://dialabc.com/sound/detect/](http://dialabc.com/sound/detect/)
    

---

## 📚 Tier 10 — Meta resource lists (good references)

- **John Hammond CTF Katana (Crypto)** – curated crypto CTF resources and tools  
    [https://github.com/JohnHammond/ctf-katana?tab=readme-ov-file#cryptography](https://github.com/JohnHammond/ctf-katana?tab=readme-ov-file#cryptography)
    
- **gregalletti CTF_tools (Crypto)** – categorized list of crypto tooling links  
    [https://github.com/gregalletti/CTF_tools?tab=readme-ov-file#cryptography-](https://github.com/gregalletti/CTF_tools?tab=readme-ov-file#cryptography-)
    

---