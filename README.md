# Express Route Error Handler

## Example

```
const express = require('express');
const errorHandler = require('express-route-error-handler);

const app = express();

app.get('/', (req, res, next) => errorHandler(next, () => {
    // [1] Create your code here
}));

app.use((err, req, res, next) => {
    if (!err) return next();

    // [2] Handle errors here
})

app.listen(3000);
```

Any errors thrown in [1] will be handled in [2]
