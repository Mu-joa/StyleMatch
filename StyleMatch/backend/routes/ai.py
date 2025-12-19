from flask import Blueprint, request, jsonify
from openai import OpenAI
import os
import base64
from pathlib import Path
from datetime import datetime

ai_bp = Blueprint("ai", __name__, url_prefix="/ai")

BASE_DIR = Path(__file__).resolve().parent.parent

def get_client():
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY not set")
    return OpenAI(api_key=api_key)

# =========================
# 키워드 매핑 테이블
# =========================
STYLE_MAP = {
    "클린": "clean minimal fashion",
    "트렌디": "trendy street fashion",
    "포멀": "formal classic outfit",
    "유니크": "unique artistic fashion"
}

COLOR_MAP = {
    "무채색": "monochrome colors",
    "컬러풀": "colorful palette",
    "파스텔": "pastel tones",
    "다크톤": "dark muted tones",
    "비비드": "vivid colors"
}

SEASON_MAP = {
    "봄": "spring",
    "여름": "summer",
    "가을": "autumn",
    "겨울": "winter"
}

BACKGROUND_MAP = {
    "실내": "indoor studio",
    "실외": "outdoor",
    "도시": "urban city background",
    "자연": "nature background",
    "스튜디오": "studio background"
}

# =========================
# 프롬프트 생성 함수
# =========================
def build_prompt(style, color, season, background):
    style_en = STYLE_MAP.get(style, "fashion outfit")
    color_en = COLOR_MAP.get(color, "neutral colors")
    season_en = SEASON_MAP.get(season, "all seasons")
    background_en = BACKGROUND_MAP.get(background, "studio background")

    return f"""
Use the reference image as the base.
The person, body proportions, pose, and camera framing
must remain the same as the reference image.

Full body shot, head-to-toe visible, including shoes.
Head slightly tilted downward, face partially obscured.

Change ONLY the outfit and background.

Outfit:
{style_en} outfit,
styled with {color_en},
suitable for {season_en}.

Background:
{background_en}.

Modern fashion lookbook photography,
soft natural lighting,
realistic proportions,
high detail, professional 4k quality.

No text, no logo, no watermark.
"""


# =========================
# 이미지 생성 API
# =========================
@ai_bp.route("/generate", methods=["POST"])
def generate_image():
    client = get_client()
    data = request.json

    style = data.get("style")
    color = data.get("color")
    season = data.get("season")
    background = data.get("background")

    if not all([style, color, season, background]):
        return jsonify({
            "error": "missing_parameters",
            "image": None
        }), 400

    prompt = build_prompt(style, color, season, background)

    try:
        ref_path = BASE_DIR / "static" / "reference" / "master_model.png"
        if not ref_path.exists():
            raise FileNotFoundError("Reference image not found")

        # 🔥 핵심: edit + 파일 객체 전달
        with open(ref_path, "rb") as ref_img:
            result = client.images.edit(
                model="gpt-image-1",
                image=ref_img,        # ✅ 파일 객체
                prompt=prompt,
                size="1024x1536"
            )

        image_base64 = result.data[0].b64_json
        image_bytes = base64.b64decode(image_base64)

        save_dir = BASE_DIR / "static" / "generated"
        save_dir.mkdir(parents=True, exist_ok=True)

        filename = f"{style}_{color}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.png"
        save_path = save_dir / filename
        save_path.write_bytes(image_bytes)

        return jsonify({
            "image": f"/backend-static/generated/{filename}"
        })

    except Exception as e:
        print("[AI ERROR]", e)
        return jsonify({
            "error": "server_error",
            "image": None,
            "message": str(e)
        }), 500