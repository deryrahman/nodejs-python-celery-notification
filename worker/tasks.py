import os
import time
from celery import Celery

CELERY_BROKER_URL = os.environ.get(
    'CELERY_BROKER_URL', 'amqp://')
CELERY_RESULT_BACKEND = os.environ.get(
    'CELERY_RESULT_BACKEND', 'amqp://')

celery = Celery('tasks', broker=CELERY_BROKER_URL, backend=CELERY_RESULT_BACKEND)

@celery.task(name='tasks.echo')
def echo(data):
    # Simulation for long running task
    time.sleep(5)
    return data
