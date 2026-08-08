# DTMF keymaps

DTMF menus are easiest to maintain when keypad input maps to named actions rather than hard-coded infrastructure behavior.

Example:

```js
{
  "1": "connect-agent",
  "2": "repeat-menu",
  "3": "play-hours",
  "9": "end-call"
}
```

A consumer can then resolve the action through its own application logic.

## Recommended flow

```text
digit
  ↓
validate
  ↓
lookup action
  ↓
emit event
  ↓
application decides what happens next
```

Avoid putting carrier credentials or production routing information in a keymap file.
