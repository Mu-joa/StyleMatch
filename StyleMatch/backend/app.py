from dotenv import load_dotenv
load_dotenv()

from flask import Flask, send_from_directory, abort
from flask_cors import CORS
from routes.vote import vote_bp
from routes.result import result_bp
from routes.ai import ai_bp
from routes.rank import rank_bp

app = Flask(
    __name__,
    static_folder="dist/static",
    static_url_path="/static",
    template_folder="dist"
)

CORS(app)

# API
app.register_blueprint(vote_bp)
app.register_blueprint(result_bp)
app.register_blueprint(ai_bp, url_prefix="/ai")
app.register_blueprint(rank_bp)

# ✅ 백엔드 이미지 서빙 (여기만 담당)
@app.route("/backend-static/<path:filename>")
def backend_static(filename):
    return send_from_directory("static", filename)

# ✅ React SPA 서빙 (루트 + 나머지 전부)
@app.route("/")
@app.route("/<path:path>")
def serve_react(path="index.html"):
    return send_from_directory("dist", path)

if __name__ == "__main__":
    app.run(debug=True)
