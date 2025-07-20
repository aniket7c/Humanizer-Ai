# humanizer-Ai/backend/wsgi.py

import sys
import os

# Add the directory containing app.py and wsgi.py to the Python path
# This ensures that 'from app import app' can find app.py
sys.path.insert(0, os.path.dirname(__file__))

from app import app as application

# This file exposes the Flask app instance for Vercel to use.
# 'application' is the standard name Vercel looks for.