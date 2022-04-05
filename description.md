# Codewars - 17
### Can you keep a secret?
---

There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2

---
```javascript

function createSecretHolder(secret) { var _secret = secret; return { setSecret: function(s) { _secret = s; }, getSecret: function() { return _secret; } }; }

```
