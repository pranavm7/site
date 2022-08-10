---
Title : Pranav Mahajan | BabyEncryption Crypto Challenge
Date : 07/19/22
Tags : cryptography, challenge, HackTheBox
draft: true
---

Cert : [link](https://www.hackthebox.com/achievement/challenge/120560/228)

# The challenge: 🤯
We are given a ciphertext with gibberish and a `chall.py` file

```python | chall.py
import string
from secret import MSG

def encryption(msg):
	ct = []
	for char in msg:
	ct.append((123 * char + 18) % 256)
	return bytes(ct)
	
ct = encryption(MSG)
f = open('./msg.enc','w')
f.write(ct.hex())
f.close()
```

Here we see that each character in the plaintext flag (imported as *secret* from MSG) has been passed through this algorithm and the hexadecimal values are written out to `msg.enc` (line #11 in `chall.py`)

|file|msg.enc|
|---|---|
|1 | 6e0a9372ec49a3f6930ed8723f9df6f6720ed8d89dc4937222ec7214d89d1e0e352ce0aa6ec82bf622227bb70e7fb7352249b7d893c493d8539dec8fb7935d490e7f9d22ec89b7a322ec8fd80e7f8921 |

As we can see this text does not make sense, however here are two things we must recognize:
- The decimal value of printable ascii characters ranges from [33 to 126](https://flaviocopes.com/printable-ascii-characters/) 
- Ascii value of 32 is the `<SPACE>` character and 127 is `<DEL>`
- In order to reverse the arithmetic, we must remember that all "characters" in `msg.enc` are < 256
- This is because in the equation `(123 * char + 18) % 256` any value above 256 would be starting over (i.e 256 = 0, 257 = 1, 258 = 2, and so on).

Since we now know this and we know that the gibberish within `msg.enc` is hexadecimal values, we can write a python script to brute force the answer.

# The solution 🎉

## The code 👾

```python
def decryption(cipher):
	hexString = bytes.fromhex(cipher) 
	answer = ""
	for each in hexString:
		for num in range(33,127):
			calc = (123 * num +18)  %256
			if calc == each:
				answer += chr(num)
				print(answer)
				pass
			pass                                                                           
		pass
	print(f"\n[!]\tAnswer found!:\n{answer}")
	pass

with open('msg.enc','r') as file:
cipher = file.readline()
pass
decryption(cipher)
```


## The explanation 🌐
Within this solution, we simply read `msg.enc` and then we pass it into the decryption function as an argument.

Then the decryption function does the following:
- Convert the ciphertext within `msg.enc` to an array of hexadecimal characters
- Create a variable (`answer`) to store the answer string
- For every hexadecimal character, we calculate the value of `(123 * num +18)  %256` where `num` is a number between the range 33 to 126 (the `range()` function in python is exclusive of the last number)
	- We then check if the hexadecimal value of `(123 * num +18)  %256` is equal to the hexadecimal character within the cipher text.
		- If the values are equal then we store the ASCII value of `num` and attach the character to `answer` string.
		- Else, we move on to the next number
	- Using this method we will get our answer, which will be printed in the following manner : 
	  ```txt
	  [!]   Answer found!:
	  {Plaintext flag}
	  ```

This type of attack is known as a brute-force attack therefore, we have successfully brute forced the ciphertext.

---

Hope this was helpful. Thanks for reading!

Until next time,
GR4Y