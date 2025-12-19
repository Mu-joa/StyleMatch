from flask import Blueprint, jsonify
import random

vote_bp = Blueprint("vote", __name__)

STYLE_MAP = {
    "clean": ["c1.png", "c2.png", "c3.png"],
    "trendy": ["t1.png", "t2.png", "t3.png"],
    "formal": ["f1.png", "f2.png","f3.png"],
    "unique": ["u1.png", "u2.png", "u3.png"],
}

@vote_bp.route("/generate_votes")
def generate_votes():
    categories = [
        "clean", "trendy", "formal", "unique",
        "clean", "trendy", "formal", "unique",
        "trendy", "unique"
    ]
    random.shuffle(categories)

    used = set()
    rounds = []

    for cat in categories:
        candidates = [s for s in STYLE_MAP[cat] if s not in used]
        if not candidates:
            candidates = STYLE_MAP[cat]

        left_img = random.choice(candidates)
        used.add(left_img)

        other_cat = random.choice([c for c in STYLE_MAP.keys() if c != cat])
        right_img = random.choice(STYLE_MAP[other_cat])

        rounds.append({
            "leftStyle": cat,
            "rightStyle": other_cat,
            "leftImage": f"/backend-static/vote/{cat}/{left_img}",
            "rightImage": f"/backend-static/vote/{other_cat}/{right_img}",
        })

    return jsonify(rounds)


import json
import os
from flask import request

DATA_PATH = "data/vote_stats.json"

@vote_bp.route("/vote", methods=["POST"])
def save_vote():
    body = request.get_json()
    style = body.get("style")

    if not style:
        return jsonify({"error": "style required"}), 400

    # 기존 데이터 로드
    if os.path.exists(DATA_PATH):
        with open(DATA_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {}

    # 투표 반영
    data[style] = data.get(style, 0) + 1

    os.makedirs("data", exist_ok=True)
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    return jsonify({"ok": True, "data": data})