
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
import json

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.environ.get("GOOGLE_GEMINI_API_KEY", "")
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

def call_gemini_api(text_to_humanize):
    """
    Calls the Google Gemini API to dynamically humanize the given text using the ultimate humanizer prompt.
    Includes robust error handling and logging.
    """
    if not GEMINI_API_KEY:
        print("\n--- ERROR: GEMINI_API_KEY is NOT SET! ---")
        print("Please set the GOOGLE_GEMINI_API_KEY environment variable before running the Flask app.")
        print("Example (Linux/macOS): export GOOGLE_GEMINI_API_KEY='YOUR_API_KEY_HERE'")
        print("Example (Windows CMD): set GOOGLE_GEMINI_API_KEY='YOUR_API_KEY_HERE'")
        print("-------------------------------------------\n")
        return "Error: API Key is missing. Please configure your backend."

    prompt = f"""
    You are an exceptionally talented, highly empathetic, and naturally engaging human writer. Your expertise lies in taking overly formal, complex, or clearly AI-generated text and transforming it into clear, concise, and genuinely human-sounding prose that anyone can understand and connect with. Your goal is to make the text feel like a friendly conversation, not a dry report.

    **Your Task:**
    Analyze the provided "AI Text." Identify all instances of jargon, passive voice, overly long sentences, repetitive structures, and any phrases that scream "AI." Then, completely rewrite the text from scratch, focusing on making it sound like a human wrote it for other humans.

    **Strict Rules for Humanization:**
    1.  **Complete Transformation:** Do not simply rephrase words. Rewrite sentences, combine or split them, and rearrange ideas to create a natural, flowing conversation.
    2.  **Conversational Tone:** Use contractions (e.g., "it's," "don't," "we're"), common idioms, and everyday language. Imagine you're explaining this to a friend or colleague.
    3.  **Active Voice & Directness:** Prefer active voice. Be direct and clear.
    4.  **Sentence Variety:** Mix short, punchy sentences with longer, more descriptive ones. Vary how sentences begin.
    5.  **ABSOLUTELY NO AI-isms or Jargon in the Output:** The final humanized version MUST NOT contain any of the following types of phrases or words:
        * "In the contemporary epoch," "proliferation of," "exponential augmentation," "multifarious organizational paradigms," "Consequently," "strategic imperative," "meticulously curate," "synthesize disparate informational repositories," "unequivocally paramount," "optimal decision-making efficacy," "Furthermore," "judicious implementation," "scalable technological infrastructures," "posited to ameliorate," "operational bottlenecks," "foster enhanced synergistic collaborations," "interdepartmental vectors," "Ultimately," "aforementioned developments," "underscore a transformative trajectory," "global socio-economic fabric."
        * Also avoid: "As an AI language model," "I am designed to," "It is important to note," "In conclusion," "Therefore," "Moreover," "Additionally," "Hence," "It is anticipated," "The objective is," "This document provides," "The data suggests," "paradigm shift," "mitigate potential vulnerabilities," "evolving threat landscape," "utilize," "leverage," "facilitate," "optimize," "implement," "comprehensive analysis," "various industrial sectors."
    6.  **Maintain Core Meaning:** The humanized text must convey the exact same factual information and original intent as the AI text. Do not add new information or remove critical facts.
    7.  **Conciseness:** Be clear and to the point. Remove any unnecessary words or phrases that don't add value.

    **Example AI to Human Transformations:**

    **Example 1:**
    AI Text: "The objective of this initiative is to optimize resource allocation to facilitate enhanced operational efficiency."
    Humanized: "Alright, so our big goal here is pretty simple: we want to make sure we're using our resources as smartly as possible. If we do that, we'll get a lot more done, a lot faster."

    **Example 2:**
    AI Text: "This document provides a comprehensive analysis of the current market trends, indicating a significant paradigm shift within the consumer electronics sector."
    Humanized: "This report really digs into what's happening in the market right now. And honestly? It looks like the whole consumer electronics scene is going through a huge change."

    **Example 3:**
    AI Text: "The data suggests a correlation between increased user engagement and the implementation of interactive features. It is imperative to leverage these insights."
    Humanized: "The numbers are pretty clear: when we make things more interactive, people really get into it. So, it's super important that we actually use what we've learned from this, you know?"

    **Example 4:**
    AI Text: "The proliferation of digital technologies has significantly impacted various industrial sectors. Consequently, the imperative to optimize human-computer interaction paradigms has become increasingly salient."
    Humanized: "Digital tech is absolutely everywhere these days, and it's totally shaken up industries across the board. Because of that, making sure people can easily and naturally interact with computers has become incredibly important."

    **Example 5:**
    AI Text: "To conclude, the aforementioned developments underscore a transformative era in technological evolution."
    Humanized: "So, what's the takeaway? All these changes really show we're living through a huge shift in technology."

    **Now, humanize the following AI-generated text. Provide only the humanized version, without any additional commentary or introduction.**

    AI Text:
    "{text_to_humanize}"

    Humanized Version:
    """

    headers = {
        "Content-Type": "application/json"
    }
    params = {
        "key": GEMINI_API_KEY
    }
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [{"text": prompt}]
            }
        ],
        "generationConfig": {
            "temperature": 1.0,  # Max temperature for creativity
            "topP": 1.0,         # Max topP for diversity
            "topK": 100,         # Wide range of options
            "maxOutputTokens": 800 # Ensure enough tokens for a full rewrite
        }
    }

    print("\n--- Sending to Gemini API ---")
    print(f"URL: {GEMINI_API_URL}")
    print(f"Headers: {headers}")
    print(f"Params (key obscured): {'key=...' if GEMINI_API_KEY else 'No key'}")
    print("Payload (first 1000 chars):", json.dumps(payload, indent=2)[:1000] + "...") # Log more of the payload
    print("---------------------------\n")


    try:
        response = requests.post(GEMINI_API_URL, headers=headers, params=params, json=payload, timeout=30) 
        response.raise_for_status() 
        result = response.json()

        print("\n--- Received from Gemini API ---")
        print("Raw Response Status:", response.status_code)
        print("Raw Response Text (first 1000 chars):", response.text[:1000]) 
        print("Parsed JSON Result:")
        print(json.dumps(result, indent=2))
        print("------------------------------\n")

        if result.get("error"):
            error_message = result["error"].get("message", "Unknown API error occurred.")
            error_status = result["error"].get("status", "UNKNOWN")
            print(f"\n--- GOOGLE API ERROR ({error_status}): {error_message} ---\n")
            return f"Error from Google API: {error_message} (Status: {error_status})"

        if result and result.get("candidates") and result["candidates"][0].get("content") and result["candidates"][0]["content"].get("parts"):
            return result["candidates"][0]["content"]["parts"][0]["text"]
        else:
            print(f"Unexpected API response structure or no content in candidates: {result}")
            return "Error: Could not humanize text. Unexpected API response structure or empty content from AI."

    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err} - Response: {response.text}")
        return f"Error: HTTP error from API. Status: {response.status_code}. Details: {response.text[:200]}..." # Log more details
    except requests.exceptions.ConnectionError as conn_err:
        print(f"Connection error occurred: {conn_err}")
        return f"Error: Could not connect to Gemini API. Check internet or URL. {conn_err}"
    except requests.exceptions.Timeout as timeout_err:
        print(f"Timeout error occurred: {timeout_err}")
        return f"Error: Gemini API request timed out after 30 seconds. {timeout_err}"
    except requests.exceptions.RequestException as req_err:
        print(f"An unknown request error occurred: {req_err}")
        return f"Error: An unknown error occurred during API request. {req_err}"
    except Exception as e:
        print(f"An unexpected Python error occurred: {e}")
        return f"Error: An internal server error occurred. {e}"

# --- API Endpoint for Humanization (unchanged) ---
@app.route('/humanize', methods=['POST'])
def humanize_text():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Missing 'text' in request body"}), 400

    input_text = data['text']
    humanized_output = call_gemini_api(input_text)

    if humanized_output.startswith("Error:"):
        return jsonify({"error": humanized_output}), 500
    else:
        return jsonify({"humanized_text": humanized_output})

# --- Health Check Endpoint (unchanged) ---
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "Backend is running!"}), 200

