from flask import Blueprint, jsonify
import json
import os

rank_bp = Blueprint("rank", __name__)

DATA_PATH = "data/vote_stats.json"

@rank_bp.route("/rank", methods=["GET"])
def get_rank():
    if not os.path.exists(DATA_PATH):
        return jsonify([])

    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    total = sum(data.values())
    ranked = sorted(data.items(), key=lambda x: x[1], reverse=True)

    result = []
    for style, count in ranked:
        percent = round((count / total) * 100, 1) if total > 0 else 0
        result.append({
            "style": style,
            "count": count,
            "percent": percent,
            "image": f"/backend-static/rank/{style}.png"
        })

    return jsonify(result)
