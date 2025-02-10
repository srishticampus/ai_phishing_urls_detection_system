# Use official Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /code

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy Django project files
COPY . .

# Create logs directory and set permissions
RUN mkdir -p logs && chmod -R 777 logs

# Create directory for database and set permissions
RUN mkdir -p /code/db && chmod -R 777 /code/db

# Expose port 8000 for Django
EXPOSE 8000

# Run migrations and start the server
CMD ["bash", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]