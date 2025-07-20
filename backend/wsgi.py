# humanizer-Ai/backend/wsgi.py

# This file exposes the Flask app instance for Vercel to use.
# Vercel expects the WSGI application to be named 'app' or 'handler'.
# We'll name it 'app' as that's what Flask typically uses.

from backend.app import app