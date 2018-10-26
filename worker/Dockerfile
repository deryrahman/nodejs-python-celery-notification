FROM python:3-slim

WORKDIR /tasks
COPY . /tasks
RUN pip install -r requirements.txt

ENTRYPOINT celery -A tasks worker --loglevel=info