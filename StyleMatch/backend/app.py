from dotenv import load_dotenv
load_dotenv()

from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.vote import vote_bp
from routes.result import result_bp
from routes.ai import ai_bp
from routes.rank import rank_bp
import os

app = Flask(
    __name__,
    static_folder="dist",
    static_url_path=""
)

CORS(app)

# API
app.register_blueprint(vote_bp)
app.register_blueprint(result_bp)
app.register_blueprint(ai_bp, url_prefix="/ai")
app.register_blueprint(rank_bp)

# backend static (선택)
@app.route("/backend-static/<path:filename>")
def backend_static(filename):
    return send_from_directory("static", filename)

# React SPA
@app.route("/")
@app.route("/<path:path>")
def serve_react(path="index.html"):
    full_path = os.path.join(app.static_folder, path)
    if os.path.exists(full_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")
