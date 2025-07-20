# humanizer-Ai/backend/wsgi.py

import sys
import os

# Add the directory containing app.py and wsgi.py to the Python path
# This ensures that 'from app import app' can find app.py
sys.path.insert(0, os.path.dirname(__file__))

# Import the Flask app instance directly as 'app'
# Vercel expects the WSGI application to be named 'app' or 'handler'
from app import app