# Nodejs Notifier for Python Tasks

Notifier for long running python tasks.

### Installation

```bash
git clone https://github.com/deryrahman/nodejs-python-celery-notification
```

### Build & Launch

```bash
docker-compose up --build
```

This will expose the Nodejs application's endpoints on port `5000`

Open browser
```bash
http://localhost:5000
```

To shut down:

```bash
docker-compose down
```

---
References:

[https://github.com/mattkohl/docker-flask-celery-redis](https://github.com/mattkohl/docker-flask-celery-redis)

[https://matthewminer.com/2015/02/21/pattern-for-async-task-queue-results.html](https://matthewminer.com/2015/02/21/pattern-for-async-task-queue-results.html)

[https://github.com/iamshaunjp/websockets-playlist](https://github.com/iamshaunjp/websockets-playlist)
