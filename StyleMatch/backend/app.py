from dotenv import load_dotenv

load_dotenv()
from flask import Flask
from flask_cors import CORS
from routes.vote import vote_bp
from routes.result import result_bp   # ✅ 추가
from routes.ai import ai_bp
from routes.rank import rank_bp



app = Flask(
    __name__,
    static_folder="static",
    static_url_path="/static"
)

CORS(app)

app.register_blueprint(vote_bp)
app.register_blueprint(result_bp)
app.register_blueprint(ai_bp, url_prefix="/ai") 
app.register_blueprint(rank_bp)   # ✅ 추가

if __name__ == "__main__":
    app.run(debug=True)
